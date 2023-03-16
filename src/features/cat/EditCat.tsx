import Input from '@/components/Input'
import Title from '@/components/Title'
import classNames from 'classnames'
import { FileUploader } from 'react-drag-drop-files'
import Image from 'next/image'
import Button from '@/components/Button'
import { useState } from 'react'
import { ICat } from './types'
import s from './CreateCat.module.css'

const DEFAULT_CAT = {
  name: '',
  description: '',
  image: '',
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
    <div
      className={classNames(
        'flex flex-col relative w-full max-w-md',
        className
      )}
    >
      <Title type="h4">Add a Fluffy Friend</Title>
      <Input
        className="mt-2"
        value={cat.name}
        onChange={(e) => setCat((prev) => ({ ...prev, name: e.target.value }))}
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
          className="lg:absolute lg:ml-4 mt-2 lg:mt-4 lg:w-72 left-full rounded-md shadow-md"
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
        {cat ? 'Save changes' : 'Add cat to collection'}
      </Button>
    </div>
  )
}
