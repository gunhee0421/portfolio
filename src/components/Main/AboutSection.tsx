import { useState } from 'react'

export const AboutSection = () => {
  const [visible, setVisible] = useState(0)

  return (
    <section id="about" className="h-screen py-60">
      <div className="flex flex-row justify-between h-full">
        <div className="w-[40%] relative group">
          <h1 className="pb-10">
            <a
              href="#about"
              className="text-garyFont text-4xl font-bold hover:text-primary transition-colors duration-500"
            >
              <span className="text-primary">01. </span>About
            </a>
          </h1>
          <div className={`transition-opacity duration-700`}>
            {visible === 1 && (
              <iframe
                src="https://giphy.com/embed/SOb4AcaDitenU4XKdC"
                width="480"
                height="480"
                className={`giphy-embed ${visible === 1 ? 'opacity-1' : 'opacity-0'}`}
                allowFullScreen
              ></iframe>
            )}
            {visible === 2 && (
              <div>
                <iframe
                  src="https://giphy.com/embed/eSKQQ8bAe4LVehldJ5"
                  width="387"
                  height="480"
                  className="giphy-embed"
                  allowFullScreen
                ></iframe>
                <p>
                  <a href="https://giphy.com/gifs/movingin-guy-lars-moving-in-eSKQQ8bAe4LVehldJ5">
                    via GIPHY
                  </a>
                </p>
              </div>
            )}
          </div>
        </div>
        <div
          className={`w-[60%] text-white text-4xl flex flex-col items-center justify-center transition-all duration-500 ${
            visible > 0 ? 'text-[#696969]' : 'text-white'
          }`}
        >
          <p
            style={{ lineHeight: '1.5' }}
            className="transition-opacity duration-500"
          >
            <strong
              className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
                visible === 1 && 'text-white'
              }`}
              onMouseEnter={() => setVisible(1)}
              onMouseLeave={() => setVisible(0)}
            >
              상상한 무궁무진한 아이디어를
            </strong>{' '}
            제가 배운 기술로 구현해가는 과정이 재밌습니다. 항상 새로운 시도를
            두려워하지 않는 프론트엔드 개발자가 되겠습니다.
          </p>
          <br />
          <br />
          <p
            style={{ lineHeight: '1.5' }}
            className="transition-opacity duration-500"
          >
            <strong
              className={`relative inline-block font-bold border-b border-gray-500 before:absolute before:left-0 before:bottom-0 before:h-[1px] before:w-0 before:bg-white before:origin-left before:transition-all before:duration-500 hover:before:w-full ${
                visible === 1 && 'text-white'
              }`}
              onMouseEnter={() => setVisible(1)}
              onMouseLeave={() => setVisible(0)}
            >
              “smooth waters run deep”
            </strong>{' '}
            제가 가장 좋아하는 영어 격언 입니다. 거칠고 빠르게 흐르는 물보다
            잔잔하지만 깊이 있게 흐르는 물처럼, 꾸준히 공부하며 나아갈 자신이
            있습니다. 성실하게 쌓은 지식을 바탕으로, 회사에 실질적인 가치를 더할
            수 있는 프론트엔드 개발자로 일하고 싶습니다.
          </p>
        </div>
      </div>
    </section>
  )
}
