interface BibleApiResponse {
  translation: {
    identifier: string;
    name: string;
    language: string;
    language_code: string;
    license: string;
  };
  random_verse: {
    book_id: string;
    book: string;
    chapter: number;
    verse: number;
    text: string;
  };
}

export default async function HomePage() {
  const res = await fetch("https://bible-api.com/data/web/random", {
    cache: "no-store",
  });
  const data: BibleApiResponse = await res.json();
  const {  random_verse } = data;

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-900">
      <div className="max-w-xl px-8 py-12 text-center">
        <p className="text-2xl leading-relaxed text-zinc-800 dark:text-zinc-100">
          &ldquo;{random_verse.text.trim()}&rdquo;
        </p>
        <p className="mt-2 text-lg font-semibold text-zinc-600 dark:text-zinc-400">
          {random_verse.book} {random_verse.chapter}:{random_verse.verse}
        </p>
       
      </div>
    </div>
  );
}