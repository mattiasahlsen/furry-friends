import Input from '@/components/Input'
import Title from '@/components/Title'
import classNames from 'classnames'
import { FileUploader } from 'react-drag-drop-files'
import Image from 'next/image'
import Button from '@/components/Button'
import { useState } from 'react'
import type { ICat } from './types'
import s from './CreateCat.module.css'
import { makeId } from '@/lib/string'
import Select from '@/components/Select'
import { GENDER } from './catConstants'

const createCat = () => ({
  name: '',
  description: '',
  image: '',
  id: makeId(16),
  birth: '',
  gender: GENDER[0],
})

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
  const [cat, setCat] = useState<ICat>(
    catToEdit ? { ...catToEdit } : createCat()
  )

  const isDisabled = !cat.name || !cat.description || !cat.image

  const close = () => {
    onCancel()
    setCat(createCat())
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
        setCat((prev) => ({ ...prev, image: reader.result as string }))
      }
    } catch (error) {
      console.error('error', error)
    }
  }

  return (
    <div className="w-full md:max-w-md lg:max-w-3xl lg:mx-auto">
      <div
        className={classNames(
          'flex flex-col lg:flex-row lg:gap-x-8',
          className
        )}
      >
        <div className="flex-1">
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
            label="Bio"
            placeholder="Cat bio (required)"
          />

          <Input
            className="mt-2 relative"
            value={cat.birth}
            min={new Date(1990, 0, 1).toISOString().split('T')[0]}
            max={new Date().toISOString().split('T')[0]}
            onChange={(e) =>
              setCat((prev) => ({ ...prev, birth: e.target.value }))
            }
            type="date"
            label="Date of birth"
          />

          <Select
            label="Gender"
            value={cat.gender}
            options={GENDER}
            onChange={(v) => {
              setCat((prev) => ({ ...prev, gender: v }))
            }}
            className="mt-2"
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
              '!w-full !border-solid !border-primary-300 bg-primary-200',
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
