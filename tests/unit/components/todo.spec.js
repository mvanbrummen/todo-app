import { mount, shallowMount } from "@vue/test-utils";
import Todo from "@/components/Todo";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = shallowMount(Todo, {
      props: { msg },
    });

    expect(wrapper.find(".message").text()).toMatch(msg);
  });

  it("adds new todo when add button is clicked", async () => {
    const wrapper = mount(Todo, {
      props: { msg: "" },
      attachToDocument: true,
    });

    await wrapper
      .find("input")
      .setValue("Learn how to unit test vuejs component");

    await wrapper.find("form").trigger("submit"); // button click doesnt submit?

    expect(wrapper.findAll("ul > li").length).toBe(1);
    expect(wrapper.find("ul > li").text()).toBe(
      "Learn how to unit test vuejs component Remove"
    );
  });
  it("removes todo when remove button is clicked", async () => {
    const wrapper = mount(Todo, {
      props: { msg: "" },
      attachToDocument: true,
    });

    await wrapper
      .find("input")
      .setValue("Learn how to unit test vuejs component");
    await wrapper.find("form").trigger("submit");

    await wrapper.find("input").setValue("K8s refresher");
    await wrapper.find("form").trigger("submit");

    expect(wrapper.findAll("ul > li").length).toBe(2);

    await wrapper.find("ul > li > button").trigger("click");

    expect(wrapper.findAll("ul > li").length).toBe(1);
  });
});
