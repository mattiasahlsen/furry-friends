import { AppState, makeStore, useAppDispatch } from '@/store'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import Cat from './Cat'
import '@testing-library/jest-dom'
import type { ICat } from './types'

describe('Cat', () => {
  it('Renders the component', () => {
    const cat = makeCat()
    const store = makeStore(false, createRootState([cat]))

    render(
      <Provider store={store}>
        <Cat catId={cat.id} />
      </Provider>
    )

    expect(() => screen.getByText('Fluffy')).toThrow()
    expect(screen.getByText(cat.name)).toBeInTheDocument()
    expect(screen.getByText(cat.description)).toBeInTheDocument()
  })

  it('is possible to edit the cat, and it is reflected in the store', () => {
    const cat = makeCat({
      id: '1',
      name: 'Test cat',
      description: 'Test cat description',
    })
    const store = makeStore(false, createRootState([cat]))

    render(
      <Provider store={store}>
        <Cat catId={cat.id} />
      </Provider>
    )

    expect(screen.getByText(cat.name)).toBeInTheDocument()

    fireEvent.click(screen.getByTestId('edit-cat'))

    expect(screen.getByText('Edit your Furry Friend')).toBeInTheDocument()

    const nameInput = screen.getByTestId('cat-name-input')
    act(() => {
      fireEvent.change(nameInput, { target: { value: 'Fluffy' } })
    })
    expect(nameInput).toHaveValue('Fluffy')

    const descriptionInput = screen.getByTestId('cat-description-input')
    act(() => {
      fireEvent.change(descriptionInput, { target: { value: 'He is cute' } })
    })
    expect(descriptionInput).toHaveValue('He is cute')

    act(() => {
      screen.getByText('Save changes').click()
    })

    expect(() => screen.getByText('Edit your Furry Friend')).toThrow()

    const cats = Object.entries(store.getState().cats.cats)
    expect(cats.length).toBe(1)
    const [id, catData] = cats[0]
    expect(id).toBe('1')
    expect(catData.name).toBe('Fluffy')
    expect(catData.description).toBe('He is cute')

    expect(screen.getByText('Fluffy')).toBeInTheDocument()
    expect(screen.getByText('He is cute')).toBeInTheDocument()
  })
})

function makeCat(cat?: Partial<ICat>): ICat {
  return {
    id: '1',
    name: 'Test Cat',
    description: 'Test Cat Description',
    birth: '2021-01-01',
    gender: 'Make',
    image: 'https://placekitten.com/200/300',
    ...cat,
  }
}

function createRootState(cats: ICat[]): AppState {
  return {
    cats: {
      error: null,
      errorCat: {},
      loading: false,
      loadingCat: {},

      cats: cats.reduce((acc, cat) => {
        acc[cat.id] = cat
        return acc
      }, {} as Record<string, ICat>),
    },
  }
}
