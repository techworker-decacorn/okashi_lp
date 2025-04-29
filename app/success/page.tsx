import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function SuccessPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-12 text-center">
      <div className="mx-auto max-w-2xl space-y-8">
        <div className="space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
            <svg
              className="h-10 w-10 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            ご購入ありがとうございます！
          </h1>
          <p className="text-lg text-gray-600">
            ご登録いただき、誠にありがとうございます。初回のNippon Snack Boxは近日中にお届けいたします。
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-900">次のステップ</h2>
          <ul className="space-y-2 text-left text-gray-600">
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              確認メールが送信されます
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              初回のボックスは3-5営業日以内に発送されます
            </li>
            <li className="flex items-center">
              <svg
                className="mr-2 h-5 w-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              配送情報はメールでお知らせします
            </li>
          </ul>
        </div>
        <div className="space-y-4">
          <p className="text-sm text-gray-500">
            ご質問やお問い合わせは、support@nipponsnackbox.com までご連絡ください。
          </p>
          <div className="flex justify-center">
            <Button asChild>
              <Link href="/">
                ホームに戻る
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
} 