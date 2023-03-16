import Title from '@/components/Title'
import Image from 'next/image'
import { ICat } from './types'

export default function Cat({ name, description, image }: ICat) {
  return (
    <div className="bg-white rounded-md shadow-lg p-4 flex">
      <Image
        src={image}
        alt={name}
        width={96}
        height={96}
        className="w-24 h-24 mr-4 object-cover block flex-none rounded-md"
      />
      <div>
        {/* <h2 className="text-lg text-text font-semibold">{name}</h2> */}
        <Title type="h4">{name}</Title>

        <p className="text-p">{description}</p>
      </div>
    </div>
  )
}
