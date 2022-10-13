export const getContext = async (c, next) => {
  const ctx = c.env?.CTX ? await env.CTX.fetch(req).then(res => res.json()) : undefined
  c.ctx = ctx
  c.user = ctx?.user
  await next()
}