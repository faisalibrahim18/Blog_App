export default function newslatter() {
  return (
    <section className="bg-gray-50">
      <div className="container mx-auto md:px-20 py-10 text-center">
        <h1 className="font-bold text-3xl text-black ">Subscribe NewSlatter</h1>
        <div className="py-4 ">
          <form>
          <input type="email" className="bg-white shadow border rounded-full w-9/12 py-3 px-7 text-gray-700 focus:outline-none focus:shadow-outline" name="" placeholder="Enter Your Email" required/>
          <br/><br/>
          <button className="bg-orange-400 px-20 py-3 rounded-full text-gray-50 text-xl">Subscribe</button>
          </form> 
        </div>  
      </div>
    </section>
  );
}
