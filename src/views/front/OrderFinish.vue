<template>
  <main>
    <section>
      <div class="container my-md-15 my-10">
        <div class="row justify-content-center">
          <div class="col-xl-8">
            <div class="border border-g-40">
              <h2 class="fs-28 text-center fw-bold bg-secondary py-6">
                付款成功
              </h2>
              <div class="text-center my-10">
                <span class="material-icons fs-80-rwd-48 mb-5"
                  >check_circle</span
                >
                <p class="fs-19">感謝您的購買！<br />商品將於3-7天內送達</p>
              </div>
            </div>
            <div class="d-flex flex-row justify-content-center mt-10">
              <router-link to="/">
                <button
                  type="button"
                  class="btn btn-primary rounded-0 px-12 py-2 position-relative"
                >
                  回到首頁
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
