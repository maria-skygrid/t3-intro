import Layout from "~/components/layouts";
import HeadsBase from "~/components/heads";

const SinglePostPage = () => {
  return (
    <>
      <HeadsBase />
      <Layout>
        <div className="p-4 border-b gap-4 border-slate-700 flex items-start">
          <p>Post view</p>
        </div>
      </Layout>
    </>
  );
}

export default SinglePostPage
