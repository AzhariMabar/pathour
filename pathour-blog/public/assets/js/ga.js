import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm";

// Ganti dengan kredensial Supabase kamu
const supabaseUrl = "https://yhszdgoekecmboavhjwi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc3pkZ29la2VjbWJvYXZoandpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjUwODAsImV4cCI6MjA2NzgwMTA4MH0.QzrCWyeQQdH8Zmm7XYdfArYsehq7w_cUwDt3mo7MLOw";
const supabase = createClient(supabaseUrl, supabaseKey);

// Ambil data pageviews dari Supabase
async function getPageViewStats() {
  const { data, error } = await supabase
    .from("pageviews")
    .select("url");

  if (error) {
    console.error("Gagal fetch data Supabase:", error);
    return {};
  }

  // Hitung total view per URL
  const viewsPerPage = {};
  data.forEach((row) => {
    const url = row.url || "unknown";
    viewsPerPage[url] = (viewsPerPage[url] || 0) + 1;
  });

  return viewsPerPage;
}

// Render bar chart
function renderChart(dataObj) {
  const ctx = document.getElementById("viewsChart").getContext("2d");
  const labels = Object.keys(dataObj);
  const data = Object.values(dataObj);

  new Chart(ctx, {
    type: "bar",
    data: {
      labels,
      datasets: [{
        label: "Jumlah View per Halaman",
        data,
        backgroundColor: "#3b82f6",
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `${ctx.raw} views`
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: { stepSize: 1 }
        }
      }
    }
  });
}

// Inisialisasi saat halaman siap
getPageViewStats().then(renderChart);
