<template>
  <div>
    <button @click="generateReport">DOWNLOAD PDF</button>

    <div class="container">
      <client-only>
         <vue-html2pdf
        :show-layout="false"
        :float-layout="false"
        :enable-download="false"
        :preview-modal="true"
        :paginate-elements-by-height="1400"
        filename="pdf file"
        :pdf-quality="2"
        :manual-pagination="false"
        pdf-format="a3"
        pdf-orientation="portrait"
        pdf-content-width="100%"
        ref="html2Pdf"
    >
        <section slot="pdf-content">
            <!-- PDF Content Here -->

            <JobOffer />

        </section>
    </vue-html2pdf>
</client-only>
    </div>

  </div>
</template>

<script>
import JobOffer from '@/components/job-offer/JobOffer.vue';
export default {
   methods: {
     generateReport () {
            this.$refs.html2Pdf.generatePdf()
        }
   },
   components: {
     JobOffer
   }
}
</script>
