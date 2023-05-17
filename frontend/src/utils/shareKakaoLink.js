export const shareKakao = () => {
  // url이 id값에 따라 변경되기 때문에 route를 인자값으로 받아줌
  if (window.Kakao) {
    const kakao = window.Kakao;
    if (!kakao.isInitialized()) {
      kakao.init("0fe168522b983b72237c2dfd782649a2"); // 카카오에서 제공받은 javascript key를 넣어줌 -> .env파일에서 호출시킴
    }

    kakao.Link.sendDefault({
      objectType: "feed", // 카카오 링크 공유 여러 type들 중 feed라는 타입 -> 자세한 건 카카오에서 확인
      content: {
        title: "나의 기록에 도전하는 사람이 생겼어요!!", // 인자값으로 받은 title
        description: "도전자를 혼내주러 가요~!! 🦾", // 인자값으로 받은 title
        imageUrl:
          "https://hyueongkyun-bucket.s3.ap-northeast-2.amazonaws.com/ssavival_logo.png",
        link: {
          mobileWebUrl: "https://k8a602.p.ssafy.io", // 인자값으로 받은 route(uri 형태)
          webUrl: "https://k8a602.p.ssafy.io",
        },
      },
      buttons: [
        {
          title: "싸바이벌 입장하기",
          link: {
            mobileWebUrl: "https://k8a602.p.ssafy.io",
            webUrl: "https://k8a602.p.ssafy.io",
          },
        },
      ],
    });
  }
};
