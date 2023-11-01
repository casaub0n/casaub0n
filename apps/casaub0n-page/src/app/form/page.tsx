/**
 * server action
 * @see https://nextjs.org/blog/next-14#server-actions-stable
 */
export default function Page() {
  async function create(formData: FormData) {
    'use server';
    console.log(`${JSON.stringify(formData)}`)
  }

  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
