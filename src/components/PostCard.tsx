import { postProps } from '@/app/functions/getPosts'
import Image from 'next/image'
import dayjs from 'dayjs'

interface PostCardProps {
  post: postProps
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div
      className="
        flex
        w-[90%]
        max-w-[560px]
        flex-col
        justify-between
        gap-2
        rounded-xl
        bg-neutral-100
        p-4
        drop-shadow-[1px_1px_4px_black]
        sm:flex-row
      "
    >
      <div className="flex flex-row items-start justify-start gap-2 overflow-hidden sm:flex-col">
        <Image
          src={post.user.image}
          alt="image of owner to post"
          width={40}
          height={40}
          className="h-12 w-12 rounded-full"
        />

        <div className="flex flex-col">
          <span className="text-[12px]">{post.user.name}</span>
          <span className="text-[10px]">{post.user.email}</span>
        </div>
      </div>

      <div className="flex flex-col  items-start sm:w-[400px]">
        <div className="flex max-h-[200px] w-full flex-col items-center gap-4 overflow-y-scroll border-y-2 border-l-2 border-black/20 px-2 py-4">
          <h3 className="text-xl font-bold ">{post.title}</h3>
          <p className="text-justify">{post.content}</p>
        </div>
        {post.imageUrl && (
          <Image
            width={592}
            height={280}
            alt="image of post"
            src={post.imageUrl}
            className="aspect-video h-[300px] w-full object-cover"
          />
        )}
        <p className="text-[10px]">
          {' '}
          {dayjs(post.createdAt).format('D[ de ]MMMM[, ]YYYY')}
        </p>
      </div>
    </div>
  )
}

export default PostCard
