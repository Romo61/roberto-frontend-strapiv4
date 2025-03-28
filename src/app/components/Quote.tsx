interface QuoteProps {
  data: {
    title: string;
    body: string;
    author: string;
  };
}

export default function Quote({ data }: QuoteProps) {
  const { title, body, author } = data;

  return (
    <div className="flex flex-col items-center py-44 mx-12 lg:mx-0">
      {title && <h2 className="my-4">{title}</h2>}
      <div className="relative text-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          aria-label="icon"
          fill="currentColor"
          className="absolute top-0 -left-4 w-4 h-4 dark:text-gray-700"
        >
          <title>Icon</title>
          <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z" />
          <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z" />
        </svg>
        <p className="py-1 px-6 text-lg italic">{body}</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="currentColor"
          className="absolute bottom-0 -right-4 w-4 h-4 dark:text-gray-700"
        >
          <title>Icon</title>
          <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z" />
          <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z" />
        </svg>
      </div>
      <span className="my-2 w-12 h-1 rounded-lg dark:bg-violet-400" />
      {author ? <p>{author}</p> : "unknown"}
    </div>
  );
}
