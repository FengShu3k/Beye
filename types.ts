
export interface FoodItem {
  id: string;
  name: string;
  category: string;
  calories: number;
  riskLevel: '低' | '中' | '高' | '极高';
  riskDescription: string;
  precautions: string[];
  bearQuote: string;
  audienceReaction: string;
  region: string;
  environment: string;
  eatingMethod: string;
  imageUrl: string;
  description: string;
}

export interface GraphNode {
  id: string;
  group: 'food' | 'region' | 'environment' | 'method';
  label: string;
}

export interface GraphLink {
  source: string;
  target: string;
  type: string;
}
