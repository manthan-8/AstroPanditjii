import { Service, Testimonial, BlogPost, HoroscopeData } from '../types';

export const services: Service[] = [
  {
    id: '1',
    title: 'Kundli Making',
    description: 'Complete birth chart analysis with detailed planetary positions and their effects on your life.',
    icon: '🔮',
    price: '₹2,500',
    duration: '60 mins'
  },
  {
    id: '2',
    title: 'Kundli Matching',
    description: 'Comprehensive compatibility analysis for marriage with Guna Milan and Manglik analysis.',
    icon: '💑',
    price: '₹3,500',
    duration: '90 mins'
  },
  {
    id: '3',
    title: 'Vastu Consultation',
    description: 'Complete Vastu analysis for homes and offices to bring prosperity and positive energy.',
    icon: '🏠',
    price: '₹5,000',
    duration: '120 mins'
  },
  {
    id: '4',
    title: 'Palmistry Reading',
    description: 'Detailed palm reading to understand your personality, career, love life, and future.',
    icon: '✋',
    price: '₹1,500',
    duration: '45 mins'
  },
  {
    id: '5',
    title: 'Numerology Analysis',
    description: 'Complete numerological analysis of your name and birth date for life guidance.',
    icon: '🔢',
    price: '₹2,000',
    duration: '60 mins'
  },
  {
    id: '6',
    title: 'Gemstone Consultation',
    description: 'Personalized gemstone recommendations based on your horoscope for maximum benefits.',
    icon: '💎',
    price: '₹1,800',
    duration: '45 mins'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    comment: 'Pandit Ji\'s predictions were incredibly accurate. His guidance helped me make the right career decision at the perfect time.',
    date: '2024-01-15'
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Delhi',
    rating: 5,
    comment: 'The Kundli matching service was thorough and detailed. We found our perfect life partner through his guidance.',
    date: '2024-01-20'
  },
  {
    id: '3',
    name: 'Meera Patel',
    location: 'Ahmedabad',
    rating: 5,
    comment: 'Excellent Vastu consultation! Our business flourished after implementing his recommendations.',
    date: '2024-01-25'
  },
  {
    id: '4',
    name: 'Amit Singh',
    location: 'Jaipur',
    rating: 5,
    comment: 'His palmistry reading was spot on. The remedies he suggested have brought positive changes in my life.',
    date: '2024-02-01'
  },
  {
    id: '5',
    name: 'Kavita Agarwal',
    location: 'Pune',
    rating: 5,
    comment: 'The gemstone recommendation worked wonders for my health and prosperity. Highly recommended!',
    date: '2024-02-05'
  }
];

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Your Birth Chart: A Beginner\'s Guide',
    summary: 'Learn the basics of reading your Kundli and understanding planetary influences on your life.',
    content: `A birth chart, also known as Kundli or Janam Patrika, is a celestial snapshot of the sky at the exact moment of your birth. This ancient Vedic tool provides profound insights into your personality, life path, and destiny.

The birth chart is divided into 12 houses, each representing different aspects of life:

1. First House (Lagna): Represents your personality, appearance, and overall approach to life
2. Second House: Governs wealth, family, and speech
3. Third House: Related to siblings, courage, and communication
4. Fourth House: Home, mother, and emotional foundation
5. Fifth House: Children, creativity, and education
6. Sixth House: Health, enemies, and daily work
7. Seventh House: Marriage, partnerships, and business
8. Eighth House: Transformation, longevity, and hidden matters
9. Ninth House: Higher learning, spirituality, and fortune
10. Tenth House: Career, reputation, and social status
11. Eleventh House: Gains, friendships, and aspirations
12. Twelfth House: Liberation, expenses, and foreign connections

The nine planets (headeragrahas) in Vedic astrology are:
- Sun (Surya): Soul, ego, and vitality
- Moon (Chandra): Mind, emotions, and mother
- Mars (Mangal): Energy, courage, and action
- Mercury (Budh): Intelligence, communication, and business
- Jupiter (Guru): Wisdom, spirituality, and prosperity
- Venus (Shukra): Love, beauty, and luxury
- Saturn (Shani): Discipline, hard work, and delays
- Rahu: Material desires and illusions
- Ketu: Spirituality and detachment

Understanding the placement and interactions of these planets in your birth chart can provide valuable guidance for making important life decisions.`,
    author: 'Pandit Ji',
    date: '2024-01-10',
    category: 'Astrology Basics',
    image: 'https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg'
  },
  {
    id: '2',
    title: 'The Power of Gemstones in Vedic Astrology',
    summary: 'Discover how specific gemstones can enhance positive planetary influences and reduce negative effects.',
    content: `Gemstones have been used in Vedic astrology for thousands of years as powerful tools to enhance positive planetary influences and mitigate negative effects. Each gemstone corresponds to a specific planet and can help balance its energy in your life.

The Nine Sacred Gemstones (headeraratna):

1. Ruby (Manikya) - Sun: Enhances leadership, confidence, and vitality
2. Pearl (Moti) - Moon: Improves emotional balance and mental peace
3. Red Coral (Moonga) - Mars: Boosts energy, courage, and physical strength
4. Emerald (Panna) - Mercury: Enhances intelligence and communication skills
5. Yellow Sapphire (Pukhraj) - Jupiter: Brings wisdom and prosperity
6. Diamond (Heera) - Venus: Attracts love, beauty, and luxury
7. Blue Sapphire (Neelam) - Saturn: Provides discipline and removes obstacles
8. Hessonite (Gomed) - Rahu: Helps overcome confusion and materialism
9. Cat's Eye (Lehsunia) - Ketu: Enhances spiritual growth and intuition

How to Choose the Right Gemstone:
- Consult a qualified astrologer for proper analysis
- Consider your birth chart and planetary positions
- Check for any planetary doshas or afflictions
- Ensure the gemstone is natural and of good quality
- Follow proper wearing procedures and mantras

Benefits of Wearing Gemstones:
- Enhanced positive traits of corresponding planets
- Protection from negative influences
- Improved health and well-being
- Better career and financial prospects
- Strengthened relationships and family bonds

Remember, gemstones are not magic solutions but tools that work in harmony with your efforts and positive actions.`,
    author: 'Pandit Ji',
    date: '2024-01-20',
    category: 'Gemstones',
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg'
  },
  {
    id: '3',
    title: 'Vastu Tips for a Prosperous Home',
    summary: 'Simple Vastu principles to bring positive energy and prosperity to your living space.',
    content: `Vastu Shastra is the ancient Indian science of architecture and design that helps create harmonious living spaces. Following proper Vastu principles can bring peace, prosperity, and positive energy to your home.

Essential Vastu Tips for Your Home:

Entrance and Main Door:
- Face the main door towards the north, east, or northeast for maximum positive energy
- Keep the entrance well-lit and clutter-free
- Place auspicious symbols like Swastika or Om near the entrance
- Avoid having the main door directly aligned with the back door

Living Room:
- Position in the north or east direction
- Keep heavy furniture in the south or west
- Use light colors for walls and decor
- Place the television in the southeast corner

Kitchen:
- Ideally located in the southeast corner
- The cook should face east while cooking
- Keep the gas stove away from the sink
- Use bright lighting and maintain cleanliness

Bedroom:
- Master bedroom should be in the southwest
- Sleep with your head towards the south or east
- Avoid mirrors facing the bed
- Keep the room clutter-free and well-ventilated

Study Room:
- Position in the north, east, or northeast
- Face east or north while studying
- Use a wooden study table
- Keep books and study materials organized

Bathroom and Toilet:
- Locate in the northwest or southeast
- Avoid bathrooms in the northeast or center
- Keep the toilet seat closed when not in use
- Ensure proper ventilation and lighting

Colors and Elements:
- Use soothing colors like white, cream, or light yellow
- Incorporate natural elements like plants and water features
- Avoid dark colors in the northeast
- Use crystals and mirrors strategically for energy enhancement

Common Vastu Mistakes to Avoid:
- Cluttered and messy spaces
- Broken or non-functional items
- Sharp corners pointing towards seating areas
- Water leakage or dampness
- Excessive use of dark colors

Remember, Vastu is about creating balance and harmony in your living space, which ultimately reflects in your life.`,
    author: 'Pandit Ji',
    date: '2024-02-01',
    category: 'Vastu',
    image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg'
  }
];

export const horoscopeData: HoroscopeData[] = [
  {
    sign: 'Aries',
    daily: 'Today brings new opportunities for career growth. Your natural leadership will shine through in team projects.',
    weekly: 'This week focus on financial planning. A new investment opportunity may present itself mid-week.',
    monthly: 'March will be transformative for personal relationships. Single Arians may find love, while couples will deepen their bond.'
  },
  {
    sign: 'Taurus',
    daily: 'A peaceful day ahead with focus on family matters. Your practical approach will solve a long-standing issue.',
    weekly: 'Health should be your priority this week. Consider starting a new fitness routine or dietary changes.',
    monthly: 'Professional recognition is on the horizon. Your consistent efforts will finally pay off this month.'
  },
  {
    sign: 'Gemini',
    daily: 'Communication is key today. Important conversations will lead to positive outcomes in both personal and professional life.',
    weekly: 'Travel opportunities may arise. Be open to new experiences and learning opportunities.',
    monthly: 'Creative projects will flourish. Your innovative ideas will be well-received by others.'
  },
  {
    sign: 'Cancer',
    daily: 'Focus on home and family today. A domestic issue that has been bothering you will find resolution.',
    weekly: 'Emotional healing is highlighted. Past wounds will begin to heal with time and self-care.',
    monthly: 'Financial stability improves significantly. A long-term investment will start showing returns.'
  },
  {
    sign: 'Leo',
    daily: 'Your confidence will attract positive attention. A leadership opportunity may present itself unexpectedly.',
    weekly: 'Creative expression is favored. Artistic endeavors will bring both joy and recognition.',
    monthly: 'Love life takes center stage. Existing relationships will strengthen, and singles may meet someone special.'
  },
  {
    sign: 'Virgo',
    daily: 'Attention to detail will be your strength today. Organize your tasks and tackle them systematically.',
    weekly: 'Health improvements are indicated. Your disciplined approach to wellness will show results.',
    monthly: 'Work projects will reach successful completion. Your methodical approach will be highly appreciated.'
  }
];

export const muhuratData = [
  {
    occasion: 'House Warming',
    date: '2024-03-15',
    time: '10:30 AM - 12:00 PM',
    description: 'Auspicious time for Griha Pravesh ceremony'
  },
  {
    occasion: 'Business Opening',
    date: '2024-03-18',
    time: '11:00 AM - 1:00 PM',
    description: 'Favorable timing for new business ventures'
  },
  {
    occasion: 'Wedding Ceremony',
    date: '2024-03-22',
    time: '7:00 AM - 9:00 AM',
    description: 'Most auspicious time for marriage ceremonies'
  },
  {
    occasion: 'Vehicle Purchase',
    date: '2024-03-25',
    time: '2:00 PM - 4:00 PM',
    description: 'Lucky timing for buying new vehicles'
  }
];

export const remedies = [
  {
    problem: 'Career Growth',
    remedy: 'Chant Ganesha Mantra daily and offer yellow flowers on Thursdays.',
    gemstone: 'Yellow Sapphire',
    duration: '21 days'
  },
  {
    problem: 'Health Issues',
    remedy: 'Wear a copper bracelet and donate red cloth on Tuesdays.',
    gemstone: 'Red Coral',
    duration: '40 days'
  },
  {
    problem: 'Financial Problems',
    remedy: 'Keep a Kuber Yantra in your wallet and chant Lakshmi Mantra.',
    gemstone: 'Emerald',
    duration: '108 days'
  },
  {
    problem: 'Relationship Issues',
    remedy: 'Perform Venus puja on Fridays and wear white clothes.',
    gemstone: 'Diamond or White Sapphire',
    duration: '30 days'
  }
];