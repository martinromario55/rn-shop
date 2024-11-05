const fetchjsonShopData = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()

    // Filter out products with a category of 'Electronics'
    const electronicsProducts = data.filter(
      product => product.category === 'Electronics'
    )

    // Sort products by the product's price in descending order
    const sortedProducts = electronicsProducts.sort((a, b) => b.price - a.price)

    // Display the filtered and sorted products
    console.log(data)
  } catch (error) {
    console.error('Error:', error)
  }
}
