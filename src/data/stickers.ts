export type StickerType = 'player' | 'team_photo' | 'badge' | 'special' | 'host' | 'museum'

export interface Sticker {
  id: string
  code: string
  teamCode: string
  teamName: string
  flag: string
  group: string
  number: number
  type: StickerType
  label: string
  foil: boolean
}

export interface Team {
  code: string
  name: string
  flag: string
  group: string
  confederation: string
}

export const GROUPS = ['Especial', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'] as const
export type Group = typeof GROUPS[number]

// Sorteio real: Washington D.C., 5 de dezembro de 2025
export const TEAMS: Team[] = [
  // Grupo A
  { code: 'MEX', name: 'México',          flag: '🇲🇽', group: 'A', confederation: 'CONCACAF' },
  { code: 'RSA', name: 'África do Sul',   flag: '🇿🇦', group: 'A', confederation: 'CAF' },
  { code: 'KOR', name: 'Coreia do Sul',   flag: '🇰🇷', group: 'A', confederation: 'AFC' },
  { code: 'CZE', name: 'República Tcheca',flag: '🇨🇿', group: 'A', confederation: 'UEFA' },
  // Grupo B
  { code: 'CAN', name: 'Canadá',          flag: '🇨🇦', group: 'B', confederation: 'CONCACAF' },
  { code: 'SUI', name: 'Suíça',           flag: '🇨🇭', group: 'B', confederation: 'UEFA' },
  { code: 'QAT', name: 'Catar',           flag: '🇶🇦', group: 'B', confederation: 'AFC' },
  { code: 'BIH', name: 'Bósnia e Herz.',  flag: '🇧🇦', group: 'B', confederation: 'UEFA' },
  // Grupo C
  { code: 'BRA', name: 'Brasil',          flag: '🇧🇷', group: 'C', confederation: 'CONMEBOL' },
  { code: 'MAR', name: 'Marrocos',        flag: '🇲🇦', group: 'C', confederation: 'CAF' },
  { code: 'HAI', name: 'Haiti',           flag: '🇭🇹', group: 'C', confederation: 'CONCACAF' },
  { code: 'SCO', name: 'Escócia',         flag: '🏴󠁧󠁢󠁳󠁣󠁴󠁿', group: 'C', confederation: 'UEFA' },
  // Grupo D
  { code: 'USA', name: 'Estados Unidos',  flag: '🇺🇸', group: 'D', confederation: 'CONCACAF' },
  { code: 'PAR', name: 'Paraguai',        flag: '🇵🇾', group: 'D', confederation: 'CONMEBOL' },
  { code: 'AUS', name: 'Austrália',       flag: '🇦🇺', group: 'D', confederation: 'AFC' },
  { code: 'TUR', name: 'Turquia',         flag: '🇹🇷', group: 'D', confederation: 'UEFA' },
  // Grupo E
  { code: 'GER', name: 'Alemanha',        flag: '🇩🇪', group: 'E', confederation: 'UEFA' },
  { code: 'CUR', name: 'Curaçao',         flag: '🇨🇼', group: 'E', confederation: 'CONCACAF' },
  { code: 'CIV', name: 'Costa do Marfim', flag: '🇨🇮', group: 'E', confederation: 'CAF' },
  { code: 'ECU', name: 'Equador',         flag: '🇪🇨', group: 'E', confederation: 'CONMEBOL' },
  // Grupo F
  { code: 'NED', name: 'Holanda',         flag: '🇳🇱', group: 'F', confederation: 'UEFA' },
  { code: 'JPN', name: 'Japão',           flag: '🇯🇵', group: 'F', confederation: 'AFC' },
  { code: 'TUN', name: 'Tunísia',         flag: '🇹🇳', group: 'F', confederation: 'CAF' },
  { code: 'SWE', name: 'Suécia',          flag: '🇸🇪', group: 'F', confederation: 'UEFA' },
  // Grupo G
  { code: 'BEL', name: 'Bélgica',         flag: '🇧🇪', group: 'G', confederation: 'UEFA' },
  { code: 'EGY', name: 'Egito',           flag: '🇪🇬', group: 'G', confederation: 'CAF' },
  { code: 'IRN', name: 'Irã',             flag: '🇮🇷', group: 'G', confederation: 'AFC' },
  { code: 'NZL', name: 'Nova Zelândia',   flag: '🇳🇿', group: 'G', confederation: 'OFC' },
  // Grupo H
  { code: 'ESP', name: 'Espanha',         flag: '🇪🇸', group: 'H', confederation: 'UEFA' },
  { code: 'CPV', name: 'Cabo Verde',      flag: '🇨🇻', group: 'H', confederation: 'CAF' },
  { code: 'KSA', name: 'Arábia Saudita',  flag: '🇸🇦', group: 'H', confederation: 'AFC' },
  { code: 'URU', name: 'Uruguai',         flag: '🇺🇾', group: 'H', confederation: 'CONMEBOL' },
  // Grupo I
  { code: 'FRA', name: 'França',          flag: '🇫🇷', group: 'I', confederation: 'UEFA' },
  { code: 'SEN', name: 'Senegal',         flag: '🇸🇳', group: 'I', confederation: 'CAF' },
  { code: 'NOR', name: 'Noruega',         flag: '🇳🇴', group: 'I', confederation: 'UEFA' },
  { code: 'IRQ', name: 'Iraque',          flag: '🇮🇶', group: 'I', confederation: 'AFC' },
  // Grupo J
  { code: 'ARG', name: 'Argentina',       flag: '🇦🇷', group: 'J', confederation: 'CONMEBOL' },
  { code: 'ALG', name: 'Argélia',         flag: '🇩🇿', group: 'J', confederation: 'CAF' },
  { code: 'AUT', name: 'Áustria',         flag: '🇦🇹', group: 'J', confederation: 'UEFA' },
  { code: 'JOR', name: 'Jordânia',        flag: '🇯🇴', group: 'J', confederation: 'AFC' },
  // Grupo K
  { code: 'POR', name: 'Portugal',        flag: '🇵🇹', group: 'K', confederation: 'UEFA' },
  { code: 'UZB', name: 'Uzbequistão',     flag: '🇺🇿', group: 'K', confederation: 'AFC' },
  { code: 'COL', name: 'Colômbia',        flag: '🇨🇴', group: 'K', confederation: 'CONMEBOL' },
  { code: 'COD', name: 'Rep. D. Congo',   flag: '🇨🇩', group: 'K', confederation: 'CAF' },
  // Grupo L
  { code: 'ENG', name: 'Inglaterra',      flag: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', group: 'L', confederation: 'UEFA' },
  { code: 'CRO', name: 'Croácia',         flag: '🇭🇷', group: 'L', confederation: 'UEFA' },
  { code: 'GHA', name: 'Gana',            flag: '🇬🇭', group: 'L', confederation: 'CAF' },
  { code: 'PAN', name: 'Panamá',          flag: '🇵🇦', group: 'L', confederation: 'CONCACAF' },
]

const STICKER_LABELS: Record<number, string> = {
  1:  'Jogador 1',  2:  'Jogador 2',  3:  'Jogador 3',
  4:  'Jogador 4',  5:  'Jogador 5',  6:  'Jogador 6',
  7:  'Jogador 7',  8:  'Jogador 8',  9:  'Jogador 9',
  10: 'Jogador 10', 11: 'Jogador 11', 12: 'Jogador 12',
  13: 'Jogador 13', 14: 'Jogador 14', 15: 'Jogador 15',
  16: 'Jogador 16', 17: 'Jogador 17', 18: 'Jogador 18',
  19: 'Foto do Time',
  20: 'Escudo (foil)',
}

const FWC_STICKERS: Omit<Sticker, 'teamCode' | 'teamName' | 'flag' | 'group'>[] = [
  { id: 'FWC-1',  code: 'FWC1',  number: 1,  type: 'special', label: 'Emblema Oficial',        foil: true },
  { id: 'FWC-2',  code: 'FWC2',  number: 2,  type: 'special', label: 'Emblema Oficial',        foil: true },
  { id: 'FWC-3',  code: 'FWC3',  number: 3,  type: 'special', label: 'Mascote Oficial',        foil: true },
  { id: 'FWC-4',  code: 'FWC4',  number: 4,  type: 'special', label: 'Slogan Oficial',         foil: true },
  { id: 'FWC-5',  code: 'FWC5',  number: 5,  type: 'special', label: 'Bola Oficial',           foil: true },
  { id: 'FWC-6',  code: 'FWC6',  number: 6,  type: 'host',    label: 'País Sede: Canadá',      foil: true },
  { id: 'FWC-7',  code: 'FWC7',  number: 7,  type: 'host',    label: 'País Sede: México',      foil: true },
  { id: 'FWC-8',  code: 'FWC8',  number: 8,  type: 'host',    label: 'País Sede: EUA',         foil: true },
  { id: 'FWC-9',  code: 'FWC9',  number: 9,  type: 'museum',  label: 'Museu: Itália 1934',     foil: true },
  { id: 'FWC-10', code: 'FWC10', number: 10, type: 'museum',  label: 'Museu: Uruguai 1950',    foil: true },
  { id: 'FWC-11', code: 'FWC11', number: 11, type: 'museum',  label: 'Museu: Alemanha 1954',   foil: true },
  { id: 'FWC-12', code: 'FWC12', number: 12, type: 'museum',  label: 'Museu: Brasil 1962',     foil: true },
  { id: 'FWC-13', code: 'FWC13', number: 13, type: 'museum',  label: 'Museu: Alemanha 1974',   foil: true },
  { id: 'FWC-14', code: 'FWC14', number: 14, type: 'museum',  label: 'Museu: Argentina 1986',  foil: true },
  { id: 'FWC-15', code: 'FWC15', number: 15, type: 'museum',  label: 'Museu: Brasil 1994',     foil: true },
  { id: 'FWC-16', code: 'FWC16', number: 16, type: 'museum',  label: 'Museu: Brasil 2002',     foil: true },
  { id: 'FWC-17', code: 'FWC17', number: 17, type: 'museum',  label: 'Museu: Itália 2006',     foil: true },
  { id: 'FWC-18', code: 'FWC18', number: 18, type: 'museum',  label: 'Museu: Alemanha 2014',   foil: true },
  { id: 'FWC-19', code: 'FWC19', number: 19, type: 'museum',  label: 'Museu: Argentina 2022',  foil: true },
  { id: 'FWC-20', code: 'FWC20', number: 20, type: 'special', label: 'Copa do Mundo 2026',     foil: true },
]

function generateTeamStickers(team: Team): Sticker[] {
  return Array.from({ length: 20 }, (_, i) => {
    const n = i + 1
    const type: StickerType = n === 19 ? 'team_photo' : n === 20 ? 'badge' : 'player'
    return {
      id: `${team.code}-${n}`,
      code: `${team.code}${n}`,
      teamCode: team.code,
      teamName: team.name,
      flag: team.flag,
      group: team.group,
      number: n,
      type,
      label: STICKER_LABELS[n],
      foil: n === 20,
    }
  })
}

const specialSection: Sticker[] = FWC_STICKERS.map(s => ({
  ...s,
  teamCode: 'FWC',
  teamName: 'Especial',
  flag: '⭐',
  group: 'Especial',
}))

const teamStickers: Sticker[] = TEAMS.flatMap(generateTeamStickers)

export const ALL_STICKERS: Sticker[] = [...specialSection, ...teamStickers]

export const TOTAL = ALL_STICKERS.length
