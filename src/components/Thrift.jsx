import React from 'react';

const ThriftShopPage = () => {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-[60vh]">
        <img
          src="/site_images/thrift_shop_hero.jpg"
          alt="Thrift Shop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="font-lemon text-white text-4xl md:text-6xl font-bold">Discover Unique Finds</h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="max-w-3xl mx-auto my-12 px-4 text-center">
        <p className="font-kopik text-lg text-gray-700 font-light leading-relaxed">
        Each year, Australians throw away 23 kg of clothing, adding to waste.
        Miracle Cafe supports sustainability by offering hand-picked, pre-loved clothes to reduce landfill and promote second chances in style.
        </p>
      </section>

      {/* Image Row Placeholder Section */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-300 h-64 w-full rounded-xl shadow-md" />
          <div className="bg-gray-300 h-64 w-full rounded-xl shadow-md" />
          <div className="bg-gray-300 h-64 w-full rounded-xl shadow-md" />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-12">
        <h2 className="font-lemon text-2xl font-semibold mb-4">Join Our Sustainable Journey</h2>
        <p className="font-kopik text-gray-700 mb-6">
          Have items you'd like to donate? We're always looking for quality pieces to add to our collection. Your contributions help promote a more sustainable future.
        </p>
      </section>
    </main>
  );
};

export default ThriftShopPage;
