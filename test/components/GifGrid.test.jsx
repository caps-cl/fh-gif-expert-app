import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs')

describe('Pruebas en <GifGrid/>', () => {
  const category = 'One Punch'

  test('debe de mostrar el loading inicialmente ', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'http://localhost.com/saitama.jpg'
      },
      {
        id: '123',
        title: 'Goku',
        url: 'http://localhost.com/goku.jpg'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: true
    })

    render(<GifGrid category={category}/>)
    screen.debug()
    expect(screen.getByText('Cargando...'))
    expect(screen.getByText(category))
    expect(screen.getAllByRole('img').length).toBe(2)
  });

  test('debe mostrar item cuando se cargan las imagenes useFetchGifs ', () => {
    // render(<GifGrid category={category}/>)
  });
});