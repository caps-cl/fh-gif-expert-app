const { render, screen } = require("@testing-library/react");
const { GifItem } = require("../../src/components");

describe("Pruebas en <GifItem />", () => {
  const title = "Saitama";
  const url = "https://github.com/saitama.jpg";

  test("debe de hacer match con el snapshot ", () => {
    const { container } = render(<GifItem title={title} url={url} />);
    expect(container).toMatchSnapshot();
  });

  test("debe de mostrar la imagen con URL y ALT indicado", () => {
    render(<GifItem title={title} url={url} />);
    // screen.debug()
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);

    const { src, alt } = screen.getByRole("img");
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test("debe mostrar el titulo en el componente", () => {
    render(<GifItem title={title} url={url} />);
    expect( screen.getByText(title)).toBeTruthy()
  });
});
