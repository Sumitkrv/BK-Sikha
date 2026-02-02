export const blogPosts = [
  {
    id: 1,
    slug: 'good-body-soul-balance',
    title: 'Have a Good Body and Soul Balance',
    excerpt: 'Discover how regular yoga practice can help you achieve perfect harmony between your physical body and inner soul, creating lasting wellness.',
    content: `Achieving balance between body and soul is essential for holistic wellness. Through regular yoga practice, meditation, and mindful living, you can create a harmonious connection that transforms your entire life. This journey begins with awareness and dedication to both physical and spiritual growth.

Learn how ancient yogic principles combined with modern wellness techniques can help you maintain this delicate balance. We'll explore breathing exercises, meditation practices, and lifestyle adjustments that support your journey toward complete harmony.

Remember, balance is not a destination but a continuous practice. Each day brings new opportunities to align your physical actions with your spiritual intentions, creating a life of purpose and peace.`,
    author: 'BK Shikha',
    date: '2026-01-28',
    category: 'Wellness',
    image: '/6 images/body and soul balance.jfif.jpeg',
    readTime: '5 min read',
  },
  {
    id: 2,
    slug: 'yoga-practice-busy-times',
    title: 'How to Keep Yoga Practice During Busy Times',
    excerpt: 'Learn effective strategies to maintain your yoga practice even during your busiest days, ensuring consistent growth and wellness.',
    content: `In our fast-paced modern world, maintaining a consistent yoga practice can feel challenging. However, with the right strategies and mindset, you can integrate yoga into even the busiest schedule.

Start by understanding that yoga practice doesn't always require an hour-long session. Even 10-15 minutes of mindful movement can be transformative. Morning stretches, lunch break meditation, or evening wind-down routines can all become part of your practice.

Create a realistic schedule that works for your lifestyle. Perhaps it's three full sessions per week, supplemented by shorter daily practices. The key is consistency over perfection. Remember, your mat is always waiting for you, and every moment spent in practice is a gift to yourself.

We'll explore time-management techniques, quick yoga sequences for busy mornings, and ways to incorporate mindfulness into daily activities. Your practice can thrive even during life's most demanding periods.`,
    author: 'BK Shikha',
    date: '2026-01-25',
    category: 'Yoga',
    image: '/6 images/yoga on busy days.png',
    readTime: '7 min read',
  },
  {
    id: 3,
    slug: 'yoga-food-mindful-eating',
    title: 'The Yoga of Food and Mindful Eating',
    excerpt: 'Explore the connection between mindful eating, nutrition, and your yoga practice for complete wellness and vitality.',
    content: `Food is not just fuel—it's a form of yoga. The ancient yogic tradition recognizes that what we eat, how we eat, and our relationship with food profoundly impacts our physical, mental, and spiritual well-being.

Mindful eating is a practice that brings awareness to every aspect of nourishment. It's about being present during meals, appreciating the colors, textures, and flavors of your food, and understanding how different foods affect your energy and practice.

In yoga philosophy, food is classified into three categories: Sattvic (pure), Rajasic (stimulating), and Tamasic (dulling). Learning to choose foods that support your practice can enhance your flexibility, focus, and overall vitality.

We'll explore practical tips for mindful eating, the best foods to support your yoga practice, and how to develop a healthy, balanced relationship with nutrition. Discover how your plate can become an extension of your yoga mat, supporting your journey toward complete wellness.`,
    author: 'BK Shikha',
    date: '2026-01-20',
    category: 'Nutrition',
    image: '/6 images/mindful eating.png',
    readTime: '6 min read',
  },
];

export const getLatestPosts = (count = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count);
};

export const getPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};
