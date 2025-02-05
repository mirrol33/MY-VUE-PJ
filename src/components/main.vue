<template>
  <div class="main-wrap">
    <section class="main-visual">
      <div class="video-area">
        <video class="video" ref="video" autoplay muted loop playsinline>
          <source src="../images/video/1.mp4" type="video/mp4" />
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
          <p>I am a Web Front-end Developer who completes user-centered Web Design based on various experiences.</p>
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
              <div class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</div>
              <div class="job">주요직무 : 웹퍼블리셔</div>
              <div class="area">근무지역 : 서울</div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</div>
              <div class="job">주요직무 : 웹퍼블리셔</div>
              <div class="area">근무지역 : 서울</div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</div>
              <div class="job">주요직무 : 웹퍼블리셔</div>
              <div class="area">근무지역 : 서울</div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</div>
              <div class="job">주요직무 : 웹퍼블리셔</div>
              <div class="area">근무지역 : 서울</div>
            </li>
            <li>
              <div class="data">2022.5-2023.11 (1년5개월)</div>
              <div class="name">(주)팀스완</div>
              <div class="content">카페24 스마트스토어, 아임웹, 워드프레스, 그누보드를 사용한 웹사이트 제작 퍼블리싱</div>
              <div class="job">주요직무 : 웹퍼블리셔</div>
              <div class="area">근무지역 : 서울</div>
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
