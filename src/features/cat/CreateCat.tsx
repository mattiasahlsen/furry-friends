import Clickable from '@/components/Clickable'
import Input from '@/components/Input'
import { Popup } from '@/components/Popup'
import Title from '@/components/Title'
import Image from 'next/image'
import { useState } from 'react'
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ICat } from './types'
import { FileUploader } from 'react-drag-drop-files'
import classNames from 'classnames'
import s from './CreateCat.module.css'
import Button from '@/components/Button'
import Icon from '@/components/Icon'

interface CatProps {
  onAdd: (cat: ICat) => void
}
const DEFAULT_CAT = {
  name: '',
  description: '',
  image: '',
}
export default function CreateCat({ onAdd }: CatProps) {
  const [showPopup, setShowPopup] = useState(false)
  const [cat, setCat] = useState<ICat>({ ...DEFAULT_CAT })

  const isDisabled = !cat.name || !cat.description || !cat.image

  const close = () => {
    setShowPopup(false)
    setCat({ ...DEFAULT_CAT })
  }
  const addCat = () => {
    onAdd(cat)
    close()
  }

  const loadImage = async (file: File) => {
    try {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {
        console.log('reader.result', reader.result)
        setCat((prev) => ({ ...prev, image: reader.result as string }))
      }
    } catch (error) {
      console.error('error', error)
    }
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
        <Popup onDismiss={close}>
          <div className="w-full max-w-md flex flex-col relative">
            <Title type="h4">Add a Fluffy Friend</Title>
            <Input
              className="mt-2"
              value={cat.name}
              onChange={(e) =>
                setCat((prev) => ({ ...prev, name: e.target.value }))
              }
              type="text"
              label="Name"
              placeholder="Cat name (required)"
            />
            <Input
              className="mt-2"
              value={cat.description}
              onChange={(e) =>
                setCat((prev) => ({ ...prev, description: e.target.value }))
              }
              type="textarea"
              label="Description"
              placeholder="Cat description (required)"
            />

            <FileUploader
              handleChange={loadImage}
              name="file"
              types={['png', 'jpg', 'jpeg']}
              label="Drag and drop your image file here"
              classes={classNames(
                '!w-full !border-solid !border-neutral-500',
                s.fileUploader
              )}
            />

            {cat.image && (
              <Image
                className="lg:absolute lg:ml-4 mt-2 lg:mt-4 lg:w-72 left-full rounded-md"
                src={cat.image}
                alt={cat.name}
                width={200}
                height={200}
                placeholder="empty"
              />
            )}

            <Button
              type="primary"
              className="mt-4"
              onClick={addCat}
              disabled={isDisabled}
            >
              Add cat to collection
            </Button>
          </div>
        </Popup>
      )}
    </div>
  )
}
