import { mount, shallowMount } from "@vue/test-utils";
import TodoItem from "@/components/TodoItem";

describe("TodoItem.vue", () => {
  it("renders props.key when passed", () => {
    const text = "test123";
    const wrapper = shallowMount(TodoItem, {
      props: { text, key: "1" },
    });

    expect(wrapper.find("li").text()).toMatch(text);
  });
  it("emits remove when clicked", async () => {
    const wrapper = shallowMount(TodoItem, {
      props: { text: "test123", key: "1" },
    });

    await wrapper.find("button").trigger("click");

    expect(wrapper.emitted().remove).toBeTruthy();
  });
});
