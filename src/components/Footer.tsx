function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white p-6">
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <h2 className="text-xl font-bold">AlmahdiStore</h2>

        <div className="flex gap-4">
          <a href="#">Home</a>
          <a href="#products">Products</a>
          <a href="#">Contact</a>
        </div>

        <p className="text-gray-400 text-sm">
          © {year} AlmahdiStore. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
