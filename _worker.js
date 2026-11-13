export default {
  async fetch() {
    return new Response("edge tunnel safe mode", { status: 200, headers: { "content-type": "text/plain; charset=utf-8" } });
  }
};
