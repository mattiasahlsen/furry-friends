import Icon from '@/components/Icon'
import { Popup } from '@/components/Popup'
import Title from '@/components/Title'
import { useAppDispatch } from '@/store'
import Image from 'next/image'
import { useState } from 'react'
import { removeCat, updateCat } from './catsSlice'
import EditCat from './EditCat'
import type { ICat } from './types'

interface CatProps {
  cat: ICat
}
export default function Cat({ cat }: CatProps) {
  const { name, description, image } = cat
  const dispatch = useAppDispatch()

  const [editing, setEditing] = useState(false)

  return (
    <div>
      <div className="bg-white rounded-md shadow-lg">
        <div className="flex pt-1 px-2 justify-end">
          <Icon
            name="AiOutlineEdit"
            size={24}
            className="cursor-pointer"
            onClick={() => setEditing(true)}
            testId="edit-cat"
          />
          <Icon
            name="IoMdClose"
            size={24}
            className="cursor-pointer"
            onClick={() => dispatch(removeCat({ id: cat.id }))}
          />
        </div>
        <div className="flex px-4 pb-4">
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-24 h-24 mr-4 object-cover block flex-none rounded-md shadow-sm"
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
            onDone={(cat) => dispatch(updateCat({ id: cat.id, updates: cat }))}
          />
        </Popup>
      )}
    </div>
  )
}
