import Clickable from '@/components/Clickable'
import { Popup } from '@/components/Popup'
import { useState } from 'react'
import type { ICat } from './types'
import Icon from '@/components/Icon'
import EditCat from './EditCat'
import { useAppDispatch } from '@/store'
import { addCat } from './catsSlice'

interface CreateCatProps {}
export default function CreateCat(props: CreateCatProps) {
  const [showPopup, setShowPopup] = useState(false)
  const dispatch = useAppDispatch()

  const onAdd = (cat: ICat) => {
    dispatch(addCat({ id: JSON.stringify(cat), cat }))
    setShowPopup(false)
  }

  return (
    <div className="flex-1 flex">
      <Clickable
        className="flex-1 bg-white rounded-md shadow-lg overflow-hidden"
        onClick={() => setShowPopup(true)}
      >
        <div className="p-4 flex flex-col items-center justify-center">
          <Icon name="AiOutlinePlusCircle" />
          <span className="font-bold">Add</span>
        </div>
      </Clickable>

      {showPopup && (
        <Popup onDismiss={() => setShowPopup(false)}>
          <EditCat onCancel={() => setShowPopup(false)} onDone={onAdd} />
        </Popup>
      )}
    </div>
  )
}
