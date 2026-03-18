import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-biography',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './biography.html',
  styleUrl: './biography.css',
})
export class Biography implements OnInit {
  president: any;

  allData: any = {

    'aguinaldo': {
    name: 'Emilio Aguinaldo',
    rank: 'FIRST',
    monicker: 'The Revolutionary President',
    term: '1899 – 1901',
    party: 'Magdalo (Nationalist)',
    image: 'agauinaldo.jpg',
    lifeAndCareer: `Emilio Aguinaldo was born on March 22, 1869, in Cavite El Viejo to a family of Chinese-Tagalog descent. His early life was steeped in local administration, serving as a gobernadorcillo, but his true calling emerged when he joined the Katipunan in 1895. He quickly became a legendary military figure, leading successful uprisings in Cavite that overshadowed other revolutionary fronts. This rise to power eventually led to the Tejeros Convention, where he was elected president of the revolutionary government, a move that sparked a tragic internal conflict with Andres Bonifacio.

                    After the signing of the Pact of Biak-na-Bato and a brief exile in Hong Kong, Aguinaldo returned with the help of the Americans to finish the revolution. On June 12, 1898, he proclaimed Philippine independence from the window of his home in Kawit. He presided over the Malolos Congress, which produced the first democratic constitution in Asia, officially inaugurating the First Philippine Republic. However, his presidency was immediately consumed by the Philippine-American War, a brutal conflict that forced his government into a mobile, retreating state.

                    His term ended with his capture in Palanan, Isabela, on March 23, 1901, by American forces led by General Frederick Funston. After taking an oath of allegiance to the United States, Aguinaldo retired to private life but remained a powerful symbol of Filipino nationalism. He spent his later years advocating for veteran rights and lived long enough to see the ultimate recognition of June 12 as the country's true Independence Day. He passed away in 1964, leaving a complex legacy as both a revolutionary hero and a controversial political figure.`,
    achievements: [
      { title: 'First Republic', desc: 'Established the First Philippine Republic in Malolos.' },
      { title: 'Independence', desc: 'Proclaimed Philippine Independence in Kawit, Cavite.' },
      { title: 'Malolos Constitution', desc: 'Oversaw the drafting of the first democratic constitution in Asia.' },
      { title: 'Military Leadership', desc: 'Led the revolutionary army against colonial rule.' }
    ],
    birth: 'March 22, 1869',
    death: 'February 6, 1964',
    restingPlace: 'Aguinaldo Shrine, Cavite',
    spouse: 'Hilaria del Rosario (1st), Maria Agoncillo (2nd)',
    education: 'Colegio de San Juan de Letran',
    quote: 'We cannot free ourselves unless we move as one.'
  },

  'quezon': {
    name: 'Manuel L. Quezon',
    rank: 'SECOND',
    monicker: 'Father of the National Language',
    term: '1935 – 1944',
    party: 'Nacionalista',
    image: 'manuel quazon.jpg',
    lifeAndCareer: `Manuel Luis Quezon grew up in Baler, Tayabas, the son of two primary school teachers. His education at the University of Santo Tomas was interrupted by the Philippine-American War, where he served as an aide-de-camp to Emilio Aguinaldo. After the war, he finished his law degree and entered the political arena, quickly rising to become the first Filipino provincial governor of Tayabas. His charismatic leadership and mastery of the American political system made him the face of the Philippine independence movement in Washington for decades.

As the first president of the Commonwealth, Quezon had the monumental task of preparing a nation for full independence after 300 years of Spanish and 35 years of American rule. He championed "Social Justice" to address the growing unrest among the peasantry and signed the Commonwealth Act No. 1 to establish a national defense force. Perhaps his most enduring legacy was the push for a national language, Tagalog, to unify the linguistically diverse archipelago, earning him the title "Father of the National Language."

When the Japanese invaded in 1941, Quezon refused to surrender the spirit of the Philippine government. He was evacuated to Australia and later to the United States, where he established a government-in-exile. Even while battling tuberculosis, he continued to lobby for the liberation of his homeland and the welfare of Filipino soldiers. He died in Saranac Lake, New York, in 1944, just months before General MacArthur’s return. His remains were eventually brought back to the Philippines and interred at the Quezon Memorial Circle.
`,
    achievements: [
      { title: 'National Language', desc: 'Established Tagalog as the basis for the national language.' },
      { title: 'Women\'s Suffrage', desc: 'Granted Filipino women the right to vote in 1937.' },
      { title: 'Social Justice', desc: 'Advocated for the rights of laborers and landless tenants.' },
      { title: 'Commonwealth Act No. 1', desc: 'Created the Philippine Army for national defense.' }
    ],
    birth: 'August 19, 1878',
    death: 'August 1, 1944',
    restingPlace: 'Quezon Memorial Circle',
    spouse: 'Aurora Aragon',
    education: 'University of Santo Tomas',
    quote: 'I prefer a government run like hell by Filipinos to a government run like heaven by Americans.'
  },

  'laurel': {
    name: 'José P. Laurel',
    rank: 'THIRD',
    monicker: 'President of the Second Republic',
    term: '1943 – 1945',
    party: 'KALIBAPI',
    image: 'jose laurel.jpg',
    lifeAndCareer: `José P. Laurel was one of the most brilliant legal minds of his generation, having studied at Oxford and Yale. Before the outbreak of World War II, he had already served as a Secretary of the Interior and a Justice of the Supreme Court. When the Japanese forces occupied Manila in 1942, Laurel was among the leaders instructed by President Quezon to remain in the country to provide a "cushion" between the harsh Japanese military administration and the civilian population. This role placed him in a precarious and often misunderstood position in history.

In 1943, he was selected to be the president of the Japanese-sponsored Second Republic. Throughout his term, Laurel walked a razor's edge. While he was forced to comply with certain Japanese demands, he famously refused to conscript Filipinos into the Japanese military to fight against their own allies. He focused on maintaining a sense of Filipino identity through educational reforms and tried to manage a collapsing economy ravaged by hyperinflation—popularly known as "Mickey Mouse money."

After the liberation, Laurel was arrested and charged with treason for collaboration. However, many defended him, arguing that his actions prevented even greater atrocities. He was granted amnesty by President Roxas in 1948. Proving his continued relevance and the people's trust, he was elected to the Senate in 1951, where he topped the polls. He is remembered today not as a traitor, but as a patriot who sacrificed his reputation to protect his people during their darkest hour.
`,
    achievements: [
      { title: 'Sovereignty Defense', desc: 'Maintained a Filipino-led government during the WWII occupation.' },
      { title: 'Educational Reform', desc: 'Emphasized Philippine history and character education.' },
      { title: 'Nationalist Advocacy', desc: 'Promoted Filipino identity despite foreign presence.' },
      { title: 'Legal Scholarship', desc: 'Contributed significantly to Philippine jurisprudence before his presidency.' }
    ],
    birth: 'March 9, 1891',
    death: 'November 6, 1959',
    restingPlace: 'Tanauan City, Batangas',
    spouse: 'Pacencia Hidalgo',
    education: 'University of the Philippines / Yale University',
    quote: 'No one can love the Filipinos better than the Filipinos themselves.'
  },

  'osmena': {
    name: 'Sergio Osmeña',
    rank: 'FOURTH',
    monicker: 'The Grand Old Man',
    term: '1944 – 1946',
    party: 'Nacionalista',
    image: 'osmena.jpg',
    lifeAndCareer: `Sergio Osmeña was the soft-spoken "Grand Old Man" of Cebuano politics. His career was a masterclass in collaboration and statesmanship; he was the first Speaker of the Philippine Assembly and served as Vice President for nearly a decade alongside his rival and friend, Manuel Quezon. When Quezon died in 1944, Osmeña took the oath of presidency in a simple ceremony in Washington D.C. He famously waded through the surf of Leyte alongside General MacArthur to begin the liberation of the Philippines, representing the return of legitimate civil government.

His presidency was defined by the grim reality of a nation in ruins. Manila had been the second most devastated city in the world after Warsaw, and the economy was non-existent. Osmeña worked tirelessly to restore the functions of the Commonwealth, re-establishing the executive departments and the judicial system. He also ensured that the Philippines participated in the formation of the United Nations, signaling to the world that the country was ready to take its place among sovereign nations.

In the 1946 elections, the first held after the war, Osmeña refused to actively campaign, believing that his record of service should speak for itself. He lost to the more energetic Manuel Roxas. Showing his characteristic grace, he attended Roxas's inauguration and retired quietly to Cebu. He remains a symbol of integrity and the "Gentleman from Cebu" who prioritized national unity over personal ambition.
`,
    achievements: [
      { title: 'Post-War Rebuild', desc: 'Began the rehabilitation of the Philippines after WWII.' },
      { title: 'UN Charter', desc: 'The Philippines became a charter member of the United Nations under his term.' },
      { title: 'Government Restoration', desc: 'Re-established the Commonwealth government in Manila.' },
      { title: 'Foreign Relations', desc: 'Strengthened ties with the U.S. for recovery efforts.' }
    ],
    birth: 'September 9, 1878',
    death: 'October 19, 1961',
    restingPlace: 'Manila North Cemetery',
    spouse: 'Estefania Chiong Veloso (1st), Esperanza Limjap (2nd)',
    education: 'University of Santo Tomas',
    quote: 'Unity is the only way to national survival.'
  },

  'roxas': {
    name: 'Manuel Roxas',
    rank: 'FIFTH',
    monicker: 'First President of the Third Republic',
    term: '1946 – 1948',
    party: 'Liberal Party',
    image: 'roxas.jpg',
    lifeAndCareer: `Manuel Roxas, a brilliant lawyer from Capiz, had a meteoric rise in politics, serving as Speaker of the House and a member of the constitutional convention. During World War II, he served in the military and was later involved in the Japanese-sponsored government, a fact that became a major point of contention during his presidential campaign. However, he was cleared of collaboration charges by General MacArthur. In 1946, he won the presidency, becoming the last president of the Commonwealth and the first of the independent Third Republic.

His term began on July 4, 1946, as the American flag was lowered and the Philippine flag was raised alone for the first time. The challenges were immense: a bankrupt treasury, a high crime rate, and a massive housing shortage. To kickstart the economy, Roxas pushed for the Bell Trade Act, which offered rehabilitation funds in exchange for "parity rights" that gave Americans equal access to Philippine natural resources—a controversial move that many nationalists decried as neo-colonialism.

Roxas also focused on the growing Hukbalahap insurgency in Central Luzon, initially trying to negotiate before declaring them an illegal organization. He founded the Rehabilitation Finance Corporation to provide loans for rebuilding homes and businesses. His presidency was tragically cut short in April 1948 when, after delivering a speech at Clark Air Base, he suffered a fatal heart attack. He died at the age of 56, leaving the task of reconstruction to his Vice President, Elpidio Quirino.
`,
    achievements: [
      { title: 'Rehabilitation Act', desc: 'Secured funds from the U.S. for post-war reconstruction.' },
      { title: 'Central Bank', desc: 'Initiated the foundation of the Central Bank of the Philippines.' },
      { title: 'Bell Trade Act', desc: 'Negotiated economic trade relations with the United States.' },
      { title: 'Amnesty Proclamation', desc: 'Issued amnesty to those accused of collaboration during the war.' }
    ],
    birth: 'January 1, 1892',
    death: 'April 15, 1948',
    restingPlace: 'Manila North Cemetery',
    spouse: 'Trinidad de Leon',
    education: 'University of the Philippines',
    quote: 'Independence is the only way to national dignity.'
  },

  'quirino': {
    name: 'Elpidio Quirino',
    rank: 'SIXTH',
    monicker: 'President of Post-War Reconstruction',
    term: '1948 – 1953',
    party: 'Liberal Party',
    image: 'quirino.jpg',
    lifeAndCareer: `Elpidio Quirino, a native of Ilocos Sur, began his career as a humble schoolteacher before becoming a lawyer and a key figure in the pre-war Commonwealth government. He ascended to the presidency from the vice presidency following the sudden death of Manuel Roxas. Inheriting a country still reeling from the physical scars of World War II and the economic burden of reconstruction, Quirino’s term was a constant battle against both external poverty and internal rebellion.

His administration’s centerpiece was the "Total Economic Mobilization" program. This ambitious plan aimed to decentralize industry and provide employment through massive public works, including the construction of the Maria Cristina Falls hydroelectric plant and several irrigation systems that still serve the country today. On the social front, he established the Agricultural Credit and Cooperative Financing Administration (ACCFA) to help small farmers gain independence from usurious moneylenders.

However, Quirino’s presidency was plagued by the intensifying Hukbalahap insurgency. While he initially attempted a policy of attraction and amnesty, the rebellion grew, fueled by peasant discontent and allegations of widespread corruption within the government. The 1949 elections, which he won, were widely criticized as being fraught with fraud. Despite these controversies, he is remembered for his "diplomacy of peace," which helped mend ties with Japan through a controversial but pragmatic amnesty for Japanese prisoners of war, prioritizing the nation's future over the bitterness of the past.
`,
    achievements: [
      { title: 'Economic Mobilization', desc: 'Revitalized the economy through industrial projects.' },
      { title: 'Social Security', desc: 'Created the precursor to the Social Security System (SSS).' },
      { title: 'Magna Carta of Labor', desc: 'Signed the landmark law protecting workers\' rights.' },
      { title: 'Foreign Policy', desc: 'Hosted the Baguio Conference of 1950 to strengthen regional ties.' }
    ],
    birth: 'November 16, 1890',
    death: 'February 29, 1956',
    restingPlace: 'Libingan ng mga Bayani',
    spouse: 'Alicia Syquia',
    education: 'University of the Philippines',
    quote: 'We must build a new nation, not on the ruins of the old, but on the foundation of our spirit.'
  },

  'magsaysay': {
    name: 'Ramon Magsaysay',
    rank: 'SEVENTH',
    monicker: 'The Champion of the Common Man',
    term: '1953 – 1957',
    party: 'Nacionalista',
    image: 'magsaysay.jpg',
    lifeAndCareer: `Ramon Magsaysay was a man of action who bypassed the traditional "ilustrado" political path. A former mechanic and guerrilla leader during the Japanese occupation, he first gained national fame as Quirino’s Secretary of National Defense. He revolutionized the fight against communism by treating the Hukbalahap insurgents not just as enemies, but as "misguided brothers." By combining decisive military operations with sincere land-to-the-landless programs, he effectively broke the back of the rebellion before even becoming president.

When he was elected in 1953, Magsaysay ushered in a "Golden Age" of Philippine democracy. He was the first president to wear the Barong Tagalog during his inauguration, signaling a shift toward indigenous pride. His slogan, "He who has less in life should have more in law," became the guiding principle of his term. He opened the gates of Malacañang Palace to the common people, literally allowing farmers and laborers to walk into the halls of power to air their grievances.

His foreign policy was staunchly pro-democratic and anti-communist, leading to the establishment of the Southeast Asia Treaty Organization (SEATO) in Manila. Tragically, his presidency—and the immense hope it inspired—was cut short on March 17, 1957, when his presidential plane, the Mt. Pinatubo, crashed in Cebu. His death sparked an unprecedented national mourning, as millions of Filipinos felt they had lost not just a leader, but a personal champion who truly understood the struggles of the "common man."
`,
    achievements: [
      { title: 'Land Tenure Reform', desc: 'Established the NARRA to give land to landless farmers.' },
      { title: 'Anti-Corruption', desc: 'Opened the Malacañang Palace to the public.' },
      { title: 'SEATO Foundation', desc: 'Pivotal role in establishing the SEATO organization.' },
      { title: 'Community Development', desc: 'Initiated "Barrio" development programs.' }
    ],
    birth: 'August 31, 1907',
    death: 'March 17, 1957',
    restingPlace: 'Manila North Cemetery',
    spouse: 'Luz Banzon',
    education: 'Jose Rizal University',
    quote: 'He who has less in life should have more in law.'
  },

  'garcia': {
    name: 'Carlos P. Garcia',
    rank: 'EIGHTH',
    monicker: 'The Filipino First President',
    term: '1957 – 1961',
    party: 'Nacionalista',
    image: 'garcia.jpg',
    lifeAndCareer: `Carlos P. Garcia was a poet, teacher, and guerrilla leader from Bohol who assumed the presidency following Magsaysay's tragic death. Unlike his predecessor’s charismatic and populist style, Garcia was a cerebral and dignified statesman. He is most significantly remembered for his "Filipino First Policy," a landmark nationalist economic program. This policy mandated that Filipino enterprises be given priority over foreign capital in the allocation of foreign exchange and the granting of government contracts, a bold move aimed at gaining economic independence from the United States.

Beyond economics, Garcia was a staunch advocate for cultural revival. He promoted the "Republic Cultural Heritage Awards" and supported the world tours of the Bayanihan Dance Company, showcasing Filipino talent on the global stage. In terms of national security, he successfully renegotiated the 1947 Military Bases Agreement with the U.S., shortening the lease from 99 years to 25 years and ensuring that Philippine laws applied within the bases.

However, his administration faced stiff opposition from foreign chambers of commerce and local critics who blamed his nationalist policies for rising inflation. Despite these pressures, Garcia remained committed to his vision of an "austere" government, implementing an austerity program to curb corruption and government waste. Though he lost his re-election bid to Diosdado Macapagal, his "Filipino First" ideology remains a cornerstone of Philippine economic nationalism.
`,
    achievements: [
      { title: 'Filipino First Policy', desc: 'Prioritized Filipino business interests over foreign ones.' },
      { title: 'Austerity Program', desc: 'Implemented strict government spending controls.' },
      { title: 'Cultural Arts', desc: 'Revived Philippine folk arts and global cultural missions.' },
      { title: 'Bohlen-Serrano Agreement', desc: 'Shortened U.S. base leases from 99 to 25 years.' }
    ],
    birth: 'November 4, 1896',
    death: 'June 14, 1971',
    restingPlace: 'Libingan ng mga Bayani',
    spouse: 'Leonila Dimataga',
    education: 'Philippine Law School',
    quote: 'The Filipino First policy is a testament to our sovereignty.'
  },

  'macapagal': {
    name: 'Diosdado Macapagal',
    rank: 'NINTH',
    monicker: 'The Poor Boy from Lubao',
    term: '1961 – 1965',
    party: 'Liberal Party',
    image: 'macapagal.jpg',
    lifeAndCareer: `Diosdado Macapagal, the "Poor Boy from Lubao," rose from a life of extreme poverty to earn two doctorate degrees and become a top diplomat. His presidency was a crusade for socio-economic reform. He is the architect of the Agricultural Land Reform Code of 1963, a revolutionary law that sought to replace the centuries-old share tenancy system with leasehold, eventually aiming to turn every farmer into an owner of the land they tilled. It was an uphill battle against a Congress dominated by land-owning elites.

Macapagal is perhaps most famous for a stroke of a pen that changed the national calendar: he moved the celebration of Philippine Independence from July 4 (the date the U.S. granted independence) to June 12 (the date Aguinaldo proclaimed it). He argued that a nation's independence should be celebrated on the day it was asserted by its own people, not on the day it was given by another. This act remains one of the most significant symbolic victories for Philippine sovereignty.

In foreign affairs, he was a visionary who proposed MAPHILINDO—a non-political confederation of Malaysia, the Philippines, and Indonesia—to promote regional cooperation among people of the Malay race. On the economic front, he lifted foreign exchange controls and allowed the Peso to float against the Dollar, seeking to stimulate a free-market economy. Despite his integrity and intellectual depth, the slow implementation of land reform and rising prices led to his defeat by Ferdinand Marcos in 1965.
`,
    achievements: [
      { title: 'Independence Day', desc: 'Moved the celebration to June 12 to honor the 1898 declaration.' },
      { title: 'Land Reform Code', desc: 'Signed the 1963 law to abolish tenancy.' },
      { title: 'MAPHILINDO', desc: 'Formed a regional confederation with Malaysia and Indonesia.' },
      { title: 'Decontrol Program', desc: 'Lifted foreign exchange controls to stimulate the market.' }
    ],
    birth: 'September 28, 1910',
    death: 'April 21, 1997',
    restingPlace: 'Libingan ng mga Bayani',
    spouse: 'Purita de la Rosa (1st), Evangelina Macaraeg (2nd)',
    education: 'University of Santo Tomas',
    quote: 'No president can build the nation alone.'
  },

  'marcos': {
    name: 'Ferdinand Marcos Sr.',
    rank: 'TENTH',
    monicker: 'The Architect of the New Society',
    term: '1965 – 1986',
    party: 'Nacionalista / KBL',
    image: 'ferdinand marcos.jpg',
    lifeAndCareer: `Ferdinand Marcos Sr. entered the presidency with a brilliant legal mind and a promise of "Greatness Again." His first term was marked by an unprecedented surge in infrastructure; he built more schools, hospitals, and highways (such as the North Luzon Expressway) than all his predecessors combined. He also spearheaded the "Green Revolution," utilizing modern agricultural technology to make the Philippines a rice-exporting nation for the first time in decades. In 1969, he became the first president of the Third Republic to be re-elected.

However, his second term was marred by social unrest, a growing communist insurgency, and the rise of a secessionist movement in Mindanao. In 1972, citing these threats to national security, Marcos declared Martial Law. He abolished Congress, padlocked media outlets, and ruled by decree. This period, known as the "New Society," initially saw a decrease in crime and a boost in tourism and energy development (including the Bataan Nuclear Power Plant), but it eventually led to widespread human rights violations and a massive accumulation of foreign debt.

By the early 1980s, the assassination of his political rival, Ninoy Aquino, sparked a wave of national outrage that the regime could not contain. The economy collapsed, and political pressure from the U.S. forced Marcos to call a "Snap Election" in 1986. The resulting allegations of massive fraud led to the peaceful People Power Revolution at EDSA. Abandoned by his military and the people, Marcos was forced into exile in Hawaii, marking the end of a 21-year rule that remains the most polarized chapter in Philippine history.

`,
    achievements: [
      { title: 'Infrastructure', desc: 'Built the San Juanico Bridge and major highways.' },
      { title: 'Green Revolution', desc: 'Achieved rice self-sufficiency in the late 1960s.' },
      { title: '1973 Constitution', desc: 'Oversaw the transition to a parliamentary system.' },
      { title: 'Foreign Diplomacy', desc: 'Hosted the first ASEAN Summit in the Philippines.' }
    ],
    birth: 'September 11, 1917',
    death: 'September 28, 1989',
    restingPlace: 'Libingan ng mga Bayani',
    spouse: 'Imelda Romualdez',
    education: 'University of the Philippines',
    quote: 'This nation can be great again.'
  },

  'aquino': {
    name: 'Corazon Aquino',
    rank: 'ELEVENTH',
    monicker: 'Icon of Democracy',
    term: '1986 – 1992',
    party: 'UNIDO / PDP-Laban',
    image: 'corazon aquino.jpg',
    lifeAndCareer: `Corazon Aquino was an unlikely leader who rose from the role of a supportive housewife to become the "Icon of Democracy." Following the 1983 assassination of her husband, Senator Benigno "Ninoy" Aquino Jr., she became the unifying figure for the democratic opposition. Her presidency was born out of the 1986 People Power Revolution, a peaceful uprising that caught the world's attention and ended the 21-year rule of Ferdinand Marcos. Her primary mandate was the dismantling of the dictatorial machinery and the restoration of democratic institutions.

Her administration was a period of fragile transition. She oversaw the drafting and ratification of the 1987 Constitution, which established strict safeguards against future authoritarianism and restored the three branches of government. Despite her massive popularity, her term was besieged by nine coup attempts by disgruntled military factions and the inherited burden of a bankrupt national treasury. She also had to manage the devastating 1990 Luzon earthquake and the 1991 eruption of Mt. Pinatubo, one of the largest volcanic eruptions of the 20th century.

On the social front, she enacted the Comprehensive Agrarian Reform Law (CARL), though its implementation faced challenges on her family's own estate, Hacienda Luisita. While critics pointed to her administration's struggle with power shortages and economic stagnation, she is credited with successfully steering the country back to a democratic path. In 1992, she made history again by refusing to run for re-election, proving her commitment to the democratic process by peacefully turning over power to her elected successor.
`,
    achievements: [
      { title: '1987 Constitution', desc: 'Ratified the current democratic constitution.' },
      { title: 'Democratic Restoration', desc: 'Re-established the three branches of government.' },
      { title: 'Family Code', desc: 'Signed the 1987 Family Code of the Philippines.' },
      { title: 'Agrarian Reform', desc: 'Enacted the Comprehensive Agrarian Reform Law (CARL).' }
    ],
    birth: 'January 25, 1933',
    death: 'August 1, 2009',
    restingPlace: 'Manila Memorial Park',
    spouse: 'Benigno "Ninoy" Aquino Jr.',
    education: 'Mount Saint Vincent College',
    quote: 'I would rather die a meaningful death than to live a meaningless life.'
  },

  'ramos': {
    name: 'Fidel V. Ramos',
    rank: 'TWELFTH',
    monicker: 'Steady Eddie',
    term: '1992 – 1998',
    party: 'Lakas-NUCD',
    image: 'ramos.jpg',
    lifeAndCareer: `Fidel V. Ramos, popularly known as "FVR," was a career soldier and West Point graduate who served as the Chief of Staff and Secretary of National Defense under Cory Aquino. He won the 1992 elections by a thin margin but quickly consolidated power through his "Unity, Solidarity, and Teamwork" (UST) approach. His presidency is widely regarded as a period of unprecedented stability and rapid economic growth, earning the Philippines the title of the "Tiger Cub Economy of Asia."

Ramos’s "Philippines 2000" vision was centered on deregulation and the breaking of long-standing monopolies. He successfully privatized the telecommunications and water industries, which led to a massive improvement in public services. He also managed to solve the crippling energy crisis of the early 90s by entering into fast-track contracts with independent power producers. Perhaps his greatest achievement was on the peace front; in 1996, he signed a historic Final Peace Agreement with the Moro National Liberation Front (MNLF), ending decades of conflict in Mindanao.

His administration also navigated the 1997 Asian Financial Crisis with more resilience than its neighbors, thanks to the fiscal reforms he had put in place. Although his term ended with some controversy regarding attempts to change the constitution (Charter Change), he is remembered as a disciplined and visionary leader who moved the Philippines from being the "Sick Man of Asia" to a competitive player on the global stage.
`,
    achievements: [
      { title: 'Economic Growth', desc: 'Liberalized the economy and broke up monopolies.' },
      { title: 'MNLF Peace Pact', desc: 'Signed a historic peace agreement with Nur Misuari.' },
      { title: 'APEC Summit', desc: 'Hosted the 1996 APEC Summit in Subic.' },
      { title: 'Energy Crisis', desc: 'Successfully ended the power "brownouts" of the early 90s.' }
    ],
    birth: 'March 18, 1928',
    death: 'July 31, 2022',
    restingPlace: 'Libingan ng mga Bayani',
    spouse: 'Amelita Martinez',
    education: 'US Military Academy (West Point)',
    quote: 'Kaya natin ito!'
  },

  'estrada': {
    name: 'Joseph Estrada',
    rank: 'THIRTEENTH',
    monicker: 'Erap para sa Mahirap',
    term: '1998 – 2001',
    party: 'LAMMP',
    image: 'estrada.jpg',
    lifeAndCareer: `Joseph Estrada was a legendary action movie star whose "Erap para sa Mahirap" (Erap for the Poor) platform won him a landslide victory in 1998. He was the first president to represent the masses so directly, promising to prioritize food security and lower the cost of basic commodities. His administration was characterized by a populist style of governance that resonated deeply with the lower classes, even as it was viewed with skepticism by the business elite and the Church.

One of the defining moments of his presidency was his "all-out war" policy against the Moro Islamic Liberation Front (MILF) in 2000. Under his direct orders, the military captured Camp Abubakar, the MILF's largest headquarters, a move that boosted his popularity in the short term but displaced thousands of civilians. On the legislative side, he signed the landmark Clean Air Act and worked on the "Lingap Para sa Mahirap" program to provide basic social services to the poorest provinces.

However, his presidency was derailed by allegations of massive corruption. In late 2000, he became the first Philippine president to be impeached after a close associate accused him of receiving payoffs from illegal gambling (jueteng). The trial in the Senate ended abruptly, sparking the "EDSA II" revolution in January 2001. Thousands gathered at the EDSA Shrine, leading to a military withdrawal of support. Estrada was forced to leave Malacañang and was later convicted of plunder, though he was eventually pardoned by his successor.

`,
    achievements: [
      { title: 'All-Out War', desc: 'Launched a military campaign against the MILF.' },
      { title: 'Clean Air Act', desc: 'Signed the Philippine Clean Air Act of 1999.' },
      { title: 'Food Security', desc: 'Prioritized agricultural programs for the poor.' },
      { title: 'Anti-Crime', desc: 'Strengthened the PAOCTF to fight organized crime.' }
    ],
    birth: 'April 19, 1937',
    death: 'N/A (Living)',
    restingPlace: 'N/A',
    spouse: 'Loi Pimentel',
    education: 'Ateneo de Manila University (High School)',
    quote: 'Walang kaibigan, walang kumpare, walang kamag-anak.'
  },

  'arroyo': {
    name: 'Gloria Macapagal Arroyo',
    rank: 'FOURTEENTH',
    monicker: 'The Economist President',
    term: '2001 – 2010',
    party: 'Lakas-CMD',
    image: 'aroyo.jpg',
    lifeAndCareer: `Gloria Macapagal Arroyo, an economist and the daughter of President Diosdado Macapagal, assumed the presidency following the ouster of Joseph Estrada. After serving the remainder of his term, she won a full six-year term in 2004. Her presidency was the second longest in Philippine history, spanning nearly a decade. As a trained economist, her focus was on fiscal discipline and infrastructure. She implemented the controversial but effective Expanded Value Added Tax (eVAT) to rescue the country from a fiscal crisis.

Arroyo’s "Strong Republic" vision led to the creation of the Nautical Highway, a roll-on/roll-off (Ro-Ro) system that connected the islands via land and sea, drastically reducing transportation costs for goods and people. Under her watch, the Business Process Outsourcing (BPO) industry exploded, becoming a primary driver of the Philippine economy. She also oversaw the abolition of the death penalty in 2006.

However, her administration was deeply polarized. The "Hello Garci" scandal in 2005, involving a leaked recording of a phone call with an election official, led to multiple impeachment attempts and massive protests. Despite the political turbulence and allegations of corruption in various government projects, her economic management allowed the Philippines to avoid a recession during the 2008 global financial crisis. She finished her term in 2010 and successfully ran for a seat in Congress.

`,
    achievements: [
      { title: 'eVAT Law', desc: 'Implemented tax reforms to stabilize the national economy.' },
      { title: 'Strong Republic Highway', desc: 'Created the Ro-Ro nautical highway system.' },
      { title: 'Economic Resilience', desc: 'Steered the country through the 2008 global crisis.' },
      { title: 'Death Penalty Abolition', desc: 'Signed the law abolishing the death penalty in 2006.' }
    ],
    birth: 'April 5, 1947',
    death: 'N/A (Living)',
    restingPlace: 'N/A',
    spouse: 'Jose Miguel Arroyo',
    education: 'Georgetown University / UP',
    quote: 'The task of a leader is to make the difficult decisions.'
  },

  'pnoy': {
    name: 'Benigno Aquino III',
    rank: 'FIFTEENTH',
    monicker: 'Daang Matuwid',
    term: '2010 – 2016',
    party: 'Liberal Party',
    image: 'aquino.jpg',
    lifeAndCareer: `Benigno Aquino III, the son of Ninoy and Cory Aquino, rode a wave of public grief and hope following his mother's death in 2009. His "Daang Matuwid" (The Straight Path) campaign promised a government free of corruption as a means to alleviate poverty. His presidency saw the Philippines reach its highest economic growth rates in decades, earning the country its first-ever investment-grade credit rating from international agencies.

Aquino’s major legacies include the implementation of the K-12 program, which modernized the Philippine education system by adding two years of Senior High School. He also signed the highly debated Responsible Parenthood and Reproductive Health Act of 2012. Internationally, he took a firm stand on the West Philippine Sea dispute, filing a case against China in the Permanent Court of Arbitration in The Hague—a case the Philippines eventually won shortly after he stepped down.

While his administration was praised for fiscal transparency, it faced intense criticism for the perceived slow response to Super Typhoon Haiyan (Yolanda) and the tragic Mamasapano clash in 2015, which resulted in the deaths of 44 elite police officers. Despite these setbacks, he left office with a relatively high approval rating and is credited with restoring international investor confidence in the Philippines.
`,
    achievements: [
      { title: 'K-12 Education', desc: 'Implemented the 12-year basic education cycle.' },
      { title: 'Hague Ruling', desc: 'Won the arbitration case against China over the West PH Sea.' },
      { title: 'RH Law', desc: 'Signed the Responsible Parenthood and Reproductive Health Act.' },
      { title: 'Economic Credit', desc: 'Achieved the country\'s first investment-grade rating.' }
    ],
    birth: 'February 8, 1960',
    death: 'June 24, 2021',
    restingPlace: 'Manila Memorial Park',
    spouse: 'None',
    education: 'Ateneo de Manila University',
    quote: 'Kayo ang boss ko.'
  },

  'duterte': {
    name: 'Rodrigo Duterte',
    rank: 'SIXTEENTH',
    monicker: 'The Punisher / Tatay Digong',
    term: '2016 – 2022',
    party: 'PDP-Laban',
    image: 'duterte.jpg',
    lifeAndCareer: `Rodrigo Duterte made history as the first president from Mindanao, winning the 2016 election on a platform of "Change is Coming." A former long-time mayor of Davao City, his leadership style was abrasive and populist. He immediately launched a brutal and highly controversial "War on Drugs," which he claimed was necessary to save the country from becoming a narco-state. This policy earned him both fierce domestic support and intense international condemnation from human rights organizations.

Duterte’s economic centerpiece was the "Build! Build! Build!" program, a massive multi-trillion peso infrastructure drive that aimed to modernize the country's transport networks and stimulate regional development. He also signed landmark social legislation, including the Universal Health Care Act and the law providing free tuition in all State Universities and Colleges (SUCs). In foreign policy, he pursued an "independent" path, often distancing the Philippines from the U.S. while seeking closer economic and military ties with China and Russia.

His term was tested by the Marawi Siege in 2017, which led to a five-month battle against ISIS-linked terrorists and the declaration of Martial Law in Mindanao. Toward the end of his term, he had to manage the COVID-19 pandemic, implementing some of the longest lockdowns in the world. Despite the controversies surrounding his rhetoric and human rights record, he remained one of the most popular presidents in Philippine history upon his departure.
`,
    achievements: [
      { title: 'Build! Build! Build!', desc: 'Launched a multi-trillion infrastructure program.' },
      { title: 'Universal Health Care', desc: 'Signed the law for universal PhilHealth coverage.' },
      { title: 'Free SUC Tuition', desc: 'Provided free tuition for all State Universities.' },
      { title: 'Bangsamoro Law', desc: 'Established the BARMM for peace in Mindanao.' }
    ],
    birth: 'March 28, 1945',
    death: 'N/A (Living)',
    restingPlace: 'N/A',
    spouse: 'Elizabeth Zimmerman (Annulled), Honeylet Avanceña (Partner)',
    education: 'Lyceum of the Philippines University',
    quote: 'My loyalty to my country begins where my loyalty to my party ends.'
  },

  'bbm': {
    name: 'Ferdinand Marcos Jr.',
    rank: 'SEVENTEENTH',
    monicker: 'BBM / PBBM',
    term: '2022 – Present',
    party: 'PFP',
    image: 'BBM.jpg',
    lifeAndCareer: `Ferdinand Marcos Jr., the son and namesake of the former president, won a historic landslide victory in 2022, securing the first majority mandate since the 1986 revolution. Campaigning on a platform of "Unity" (UniTeam), his election marked the full political return of the Marcos family. His administration has focused on a "bagong Pilipinas" (new Philippines) narrative, emphasizing continuity of infrastructure development and a renewed focus on food security and agricultural modernization.

Early in his term, Marcos Jr. took on the role of concurrent Secretary of Agriculture to personally oversee the stabilization of food prices. He also established the Maharlika Investment Fund, the nation's first sovereign wealth fund, intended to finance high-impact infrastructure and development projects. Unlike his predecessor, he has shifted Philippine foreign policy back toward a strong traditional alliance with the United States, granting expanded access to military bases while continuing to engage with regional neighbors.

His administration continues to navigate post-pandemic economic recovery, dealing with global inflation and energy security. While his presidency is still ongoing, his focus remains on digitizing government services and transforming the Philippines into a leading hub for renewable energy and high-tech manufacturing in Southeast Asia.`,
    achievements: [
      { title: 'Maharlika Fund', desc: 'Created the first sovereign wealth fund in the Philippines.' },
      { title: 'Food Security', desc: 'Prioritized agriculture and self-sufficiency in rice.' },
      { title: 'Renewable Energy', desc: 'Opened the energy sector to 100% foreign ownership.' },
      { title: 'Diplomacy', desc: 'Strengthened security alliances with key global partners.' }
    ],
    birth: 'September 13, 1957',
    death: 'N/A (Living)',
    restingPlace: 'N/A',
    spouse: 'Liza Araneta',
    education: 'Oxford University / Wharton (Post-grad studies)',
    quote: 'Sama-sama tayong babangon muli.'
  }
};

  constructor(private route: ActivatedRoute) {}

ngOnInit() {
  
  const rawName = this.route.snapshot.paramMap.get('id');

  if (rawName) {
    const cleanName = decodeURIComponent(rawName);
    this.president = this.allData[cleanName];
    console.log("URL Name:", rawName);
    console.log("Cleaned Name:", cleanName);
    console.log("Found Data:", this.president);
  }
}
}