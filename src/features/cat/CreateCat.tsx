import Clickable from '@/components/Clickable'
import { Popup } from '@/components/Popup'
import { useState } from 'react'
import { ICat } from './types'
import Icon from '@/components/Icon'
import EditCat from './EditCat'

interface CreateCatProps {
  onAdd: (cat: ICat) => void
}
export default function CreateCat({ onAdd }: CreateCatProps) {
  const [showPopup, setShowPopup] = useState(false)

  const addCat = (cat: ICat) => {
    onAdd(cat)
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
          <EditCat onCancel={() => setShowPopup(false)} onDone={addCat} />
        </Popup>
      )}
    </div>
  )
}
