export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Dynamic import to avoid bundling issues in edge/client
    const { default: pino } = await import('pino')
    await import('next-logger')
  }
}