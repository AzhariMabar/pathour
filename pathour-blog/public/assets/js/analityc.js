import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

// Ganti dengan kredensial Supabase kamu
const supabaseUrl = "https://yhszdgoekecmboavhjwi.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inloc3pkZ29la2VjbWJvYXZoandpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIyMjUwODAsImV4cCI6MjA2NzgwMTA4MH0.QzrCWyeQQdH8Zmm7XYdfArYsehq7w_cUwDt3mo7MLOw";
const supabase = createClient(supabaseUrl, supabaseKey);

// Fungsi untuk ambil data view per hari
async function getViewsPerDay() {
  const { data, error } = await supabase
    .from('pageviews')
    .select('timestamp')
    .gte('timestamp', new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString()); // 7 hari terakhir

  if (error) {
    console.error('Error fetch data:', error);
    return;
  }

  // Olah data jadi { tanggal: jumlah_view }
  const counts = {};

  data.forEach(({ created_at }) => {
    const day = new Date(created_at).toISOString().split('T')[0];
    counts[day] = (counts[day] || 0) + 1;
  });

  const labels = Object.keys(counts).sort();
  const values = labels.map(date => counts[date]);

  renderChart(labels, values);
}

// Fungsi render chart
function renderChart(labels, values) {
  const ctx = document.getElementById('viewsChart').getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Views per Day',
        data: values,
        fill: true,
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.2)',
        tension: 0.3
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Total Page Views (7 Hari Terakhir)' }
      },
      scales: {
        y: { beginAtZero: true }
      }
    }
  });
}

getViewsPerDay();
