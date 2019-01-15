import { mount } from "@vue/test-utils";
import Avatar from "./avatar";

describe("Avatar", () => {
  it("", () => {
    const wrapper = mount(Avatar);
    expect(wrapper.isVueInstance()).toBeTruthy();
  });
});
