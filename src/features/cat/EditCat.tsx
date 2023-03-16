import Input from '@/components/Input'
import Title from '@/components/Title'
import classNames from 'classnames'
import { FileUploader } from 'react-drag-drop-files'
import Image from 'next/image'
import Button from '@/components/Button'
import { useState } from 'react'
import type { ICat } from './types'
import s from './CreateCat.module.css'

const DEFAULT_CAT = {
  name: '',
  description: '',
  image: '',
  id: '',
}

interface EditCatProps {
  className?: string
  cat?: ICat
  onDone: (cat: ICat) => void
  onCancel: () => void
}

export default function EditCat({
  className,
  onDone,
  onCancel,
  cat: catToEdit,
}: EditCatProps) {
  const [cat, setCat] = useState<ICat>({ ...(catToEdit ?? DEFAULT_CAT) })

  const isDisabled = !cat.name || !cat.description || !cat.image

  const close = () => {
    onCancel()
    setCat({ ...DEFAULT_CAT })
  }
  const addCat = () => {
    onDone(cat)
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
    <div className="w-full md:max-w-md lg:max-w-3xl">
      <div
        className={classNames(
          'flex flex-col lg:flex-row lg:gap-x-8',
          className
        )}
      >
        <div className="flex-1">
          <Title type="h4">Add a Fluffy Friend</Title>
          <Input
            className="mt-4"
            value={cat.name}
            onChange={(e) =>
              setCat((prev) => ({ ...prev, name: e.target.value }))
            }
            type="text"
            label="Name"
            placeholder="Cat name (required)"
          />
          <Input
            className="mt-4"
            value={cat.description}
            onChange={(e) =>
              setCat((prev) => ({ ...prev, description: e.target.value }))
            }
            type="textarea"
            label="Description"
            placeholder="Cat description (required)"
          />
        </div>

        <div className="flex-1 mt-4 lg:mt-16">
          <FileUploader
            handleChange={loadImage}
            name="file"
            types={['png', 'jpg', 'jpeg']}
            label={
              cat.image
                ? 'Drag and drop to replace image'
                : 'Drag and drop your image file here'
            }
            classes={classNames(
              '!w-full !border-solid !border-neutral-500',
              s.fileUploader
            )}
          />

          {cat.image && (
            <Image
              className="mt-2 lg:mt-4 w-full max-w-md max-h-60 object-cover left-full rounded-md shadow-md"
              src={cat.image}
              alt={cat.name}
              width={200}
              height={200}
              placeholder="empty"
            />
          )}
        </div>
      </div>
      <Button
        type="primary"
        className="mt-6 lg:mt-8 w-full"
        onClick={addCat}
        disabled={isDisabled}
      >
        {cat ? 'Save changes' : 'Add cat to collection'}
      </Button>
    </div>
  )
}
