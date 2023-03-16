import Icon from '@/components/Icon'
import { Popup } from '@/components/Popup'
import Title from '@/components/Title'
import Image from 'next/image'
import { useState } from 'react'
import EditCat from './EditCat'
import { ICat } from './types'

interface CatProps {
  cat: ICat
  onUpdate: (cat: ICat) => void
  onRemove: () => void
}
export default function Cat({ cat, onUpdate, onRemove }: CatProps) {
  const { name, description, image } = cat

  const [editing, setEditing] = useState(false)

  return (
    <div>
      <div className="bg-white rounded-md shadow-lg">
        <div className="flex py-1 px-2 justify-end">
          <Icon
            name="AiOutlineEdit"
            size={24}
            className="cursor-pointer"
            onClick={() => setEditing(true)}
          />
          <Icon
            name="IoMdClose"
            size={24}
            className="cursor-pointer"
            onClick={onRemove}
          />
        </div>
        <div className="flex px-4 pb-4">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 mr-4 object-cover block flex-none rounded-md"
          />
          <div>
            <Title type="h4">{name}</Title>

            <p className="text-p">{description}</p>
          </div>
        </div>
      </div>

      {editing && (
        <Popup onDismiss={() => setEditing(false)}>
          <EditCat
            cat={cat}
            onCancel={() => setEditing(false)}
            onDone={onUpdate}
          />
        </Popup>
      )}
    </div>
  )
}
