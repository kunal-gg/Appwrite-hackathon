import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  htmlWebpackPlugin: {
    meta: {
      title: 'Style Lens',
      description: 'Discover a revolutionary way to simplify your online shopping experience with Style Lens. Our innovative website offers a seamless image search solution, empowering you to find the perfect clothing items with ease. With our advanced algorithms, we extract frames from YouTube videos, allowing you to focus on specific clothing items that catch your eye. Our intelligent image cropping technology ensures that you only see the most relevant areas, eliminating distractions and enhancing accuracy. Once you havee found your desired items, our integrated search functionality connects you directly to Amazon, where you can effortlessly explore similar products and make your purchase. Whether you are searching for a trendy dress, stylish shoes, or fashionable accessories, our platform streamlines the process, saving you time and effort. Join us today and discover a whole new world of convenient and efficient online shopping at Style Lens.',
      author: 'DevlUp Labs',
      // Add other custom meta tags as needed
    },
  },
})
