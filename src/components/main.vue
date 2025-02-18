<template>
  <div class="main-wrap">
    <section class="main-visual">
      <div class="video-area">
        <video class="video" ref="video" autoplay muted loop playsinline>
          <source src="../assets/video/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div class="grid">
        <div v-for="n in 15" :key="n" :class="'box n' + n"><span></span></div>
      </div>
    </section>
    <section class="intro-info">
      <div class="inner">
        <div class="intro-01">
          <p>다양한 경험을 바탕으로 사용자 중심의 웹 디자인을 완성하는 <b>웹 프론트엔드 개발자</b>입니다. <b>React, Vue, Node.js, SCSS(SASS), JavaScript, TypeScript, PHP</b> 등을 활용하여 고도화된 웹 애플리케이션 및 쇼핑몰을 개발했으며, <b>그누보드, 워드프레스, 카페24 스마트 스토어</b> 등에서 사용자 경험을 최우선으로 고려한 사이트 제작에 능숙합니다. 또한, 미디어쿼리와 트랜지션 효과를 활용하여 <b>반응형 웹 최적화</b> 및 <b>사용자 경험</b>을 향상시키는 데 주력하고 있습니다.</p>
        </div>
        <div class="intro-02">
          <h2>어쩌구 저쩌구구</h2>
        </div>
      </div>
    </section>
    <section class="work-history">
      <div class="inner">
        <div class="work-history-wrap">
          <ul class="list">
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="details">
                <p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p>
                <p class="job">주요직무 : 웹퍼블리셔</p>
                <p class="area">근무지역 : 서울</p>
                <p class="reason">퇴사사유 : 경영악화</p>
              </div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="details">
                <p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p>
                <p class="job">주요직무 : 웹퍼블리셔</p>
                <p class="area">근무지역 : 서울</p>
                <p class="reason">퇴사사유 : 경영악화</p>
              </div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="details">
                <p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p>
                <p class="job">주요직무 : 웹퍼블리셔</p>
                <p class="area">근무지역 : 서울</p>
                <p class="reason">퇴사사유 : 경영악화</p>
              </div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="details">
                <p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p>
                <p class="job">주요직무 : 웹퍼블리셔</p>
                <p class="area">근무지역 : 서울</p>
                <p class="reason">퇴사사유 : 경영악화</p>
              </div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="details">
                <p class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</p>
                <p class="job">주요직무 : 웹퍼블리셔</p>
                <p class="area">근무지역 : 서울</p>
                <p class="reason">퇴사사유 : 경영악화</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <section class="portfolio-site">
      <div class="inner">
        <!-- 퍼블리싱 포트폴리오 리스트 -->
        <ul>
          <li v-for="n in 15" :key="n" :class="'box n' + n"><picture></picture></li>
        </ul>
      </div>
    </section>
    <section class="portfolio-design">
      <div class="inner">
        <!-- 디자인 포트폴리오 리스트 -->
      </div>
    </section>
    <section class="edu-history">
      <div class="inner">
        <!-- 교육과정 히스토리 -->
      </div>
    </section>
    <section class="main-skills">
      <div class="inner">
        <!-- 기술 스택 드래그 영역 -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "MainPage",
};
</script>
