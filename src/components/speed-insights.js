import speedInsights from '@vercel/speed-insights';

async function run() {
  const url = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : 'http://localhost:3000'; // fallback for local dev

  const results = await speedInsights({
    url,
    strategy: 'mobile', // or 'desktop'
    budget: {
      performance: 90, // optional thresholds
    },
  });

  console.log(JSON.stringify(results, null, 2));
}

run();
