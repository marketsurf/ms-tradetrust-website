import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import debug from "debug";

configure({ adapter: new Adapter() });

// Jest swallows stderr from debug, so if process is called with DEBUG then redirect debug to console.log
if (process.env.DEBUG) {
  debug.log = console.log.bind(console);
}

// polyfill (https://stackoverflow.com/questions/42213522/mocking-document-createrange-for-jest)
document.createRange = () => ({
  setStart: () => {},
  setEnd: () => {},
  commonAncestorContainer: {
    nodeName: "BODY",
    ownerDocument: document,
  },
});
window.alert = jest.fn();
