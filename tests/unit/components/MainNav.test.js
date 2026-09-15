import { render, screen } from "@testing-library/vue";
import MainNav from "@/component/MainNav.vue";

describe("MainNav", () => {
  it("displays the company name", () => {
    render(MainNav);
    const companyName = screen.getByText("Bobo Carrers");
    expect(companyName).toBeInTheDocument();
  })
})