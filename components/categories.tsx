import Image from "next/image"

const categories = [
  {
    name: "Main Dish",
    count: "86 dishes",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200&h=200&fit=crop"
  },
  {
    name: "Break Fast",
    count: "12 break fast",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=200&h=200&fit=crop"
  },
  {
    name: "Dessert",
    count: "48 dessert",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&h=200&fit=crop"
  },
  {
    name: "Browse All",
    count: "255 Items",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=200&h=200&fit=crop"
  }
]

export function Categories() {
  return (
    <section className="w-full px-4 md:px-8 lg:px-16 py-16 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold uppercase tracking-wider text-sm">
            Customer Favorites
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Popular Catagories
          </h2>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow cursor-pointer group"
            >
              <div className="w-24 h-24 md:w-32 md:h-32 bg-accent rounded-full flex items-center justify-center mb-4 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.name}
                  width={128}
                  height={128}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform"
                />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{category.name}</h3>
              <p className="text-muted-foreground text-sm">({category.count})</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
