app.component("bmi-calculator", {
  template:
    /*html*/
    `
    <div class="main-container align-items-center">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-10 col-md-5 col-lg-3">
              <div class="card shadow border-0 p-3 rounded-3">
                <div class="form-group">
                  <label for="weight">Weight (kg)</label>
                  <div class="input-group">
                    <button
                      class="btn btn-light border"
                      @click="weightDecrement"
                    >
                      <i class="fas fa-minus fa-sm text-red"></i>
                    </button>
                    <input
                      id="weight"
                      type="text"
                      class="form-control text-center fw-bold"
                      v-model.number="weight"
                    />
                    <button
                      class="btn btn-light border"
                      @click="weightIncrement"
                    >
                      <i class="fas fa-plus fa-sm text-red"></i>
                    </button>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <label for="height">Height (cm)</label>
                  <div class="input-group">
                    <button
                      class="btn btn-light border"
                      @click="heightDecrement"
                    >
                      <i class="fas fa-minus fa-sm text-red"></i>
                    </button>
                    <input
                      id="height"
                      type="text"
                      class="form-control text-center fw-bold"
                      v-model.number="height"
                    />
                    <button
                      class="btn btn-light border"
                      @click="heightIncrement"
                    >
                      <i class="fas fa-plus fa-sm text-red"></i>
                    </button>
                  </div>
                </div>
                <p
                  v-if="weight != null && height != null && weight != 0 && height != 0"
                  class="mt-3 mb-0"
                >
                  Your Body Mass Index is <strong>{{bmi.toFixed(1)}}</strong>
                  <br />
                  This is considered
                  <strong class="text-danger" v-if="bmi < 18.5"
                    >underweight</strong
                  >
                  <strong
                    class="text-success"
                    v-else-if="bmi > 18.4 && bmi < 25"
                    >normal</strong
                  >
                  <strong class="text-danger" v-else>overweight</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
  data() {
    return {
      weight: null,
      height: null,
    };
  },
  methods: {
    weightIncrement() {
      this.weight += 1;
    },
    weightDecrement() {
      if (this.weight > 0) {
        this.weight -= 1;
      }
    },
    heightIncrement() {
      this.height += 1;
    },
    heightDecrement() {
      if (this.height > 0) {
        this.height -= 1;
      }
    },
  },
  computed: {
    cmToMeters() {
      return this.height / 100;
    },
    bmi() {
      return this.weight / (this.cmToMeters * this.cmToMeters);
    },
  },
});
