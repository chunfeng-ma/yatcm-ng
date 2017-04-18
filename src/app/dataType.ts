/**
 * Created by zyf on 1/13/17.
 */

// export class
export class PageInfo {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  startCursor: string;
  endCursor: string
}

export class allHerb {
  pageInfo: PageInfo;
  edges: HerbNodeEdge[]
}
export class HerbNodeEdge {
  cursor: string;
  node: HerbNode
}
export class HerbNode {
  id: any;
  name: string;
  chineseName: string;
  phoneticName: string;
  describe: string;
  medicinalPart: string;
  image: string;
  imageUrl: string;
  compounds: allCompound;
  wikiLink: string;
  wikiChinese: string;
  relatedHerbs: allHerb;
  prescription: allPrescription;
  herb: allHerb;
}

export class allPrescription {
  pageInfo: PageInfo;
  edges: PrescriptionNodeEdge[];
}
export class PrescriptionNodeEdge {
  cursor: string;
  node: PrescriptionNode;
}
export class PrescriptionNode {
  id: any;
  englishName: string;
  chineseName: string;
  phoneticName: string;
  zucheng: string;
  yongfa: string;
  fangjie: string;
  traditionUsage: string;
  modernUsage: string;
  modernUsageEn: string;
  mainPrescription: PrescriptionNode;
  herbs: allHerb;
  prescription: allPrescription;
}

export class allCompound {
  pageInfo: PageInfo;
  edges: CompoundNodeEdge[];
}
export class CompoundNodeEdge {
  cursor: string;
  node: CompoundNode;
}
export class CompoundNode {
  id: any;
  englishName: string;
  chineseName: string;
  smiles: string;
  molBlock: string;
  molFile: string;
  molImage: string;
  relatedCompounds: allCompound;
  firstCreated: any;
  lastModified: any;
  formula: string;
  molWeight: number;
  alogp: number;
  hba: number;
  hbd: number;
  psa: number;
  rtb: number;
  compound: allCompound;
  herb: allCompound
}

export class allKeggpathway {
  pageInfo: PageInfo;
  edges: KEGGPathwayNodeEdge[];
}
export class KEGGPathwayNodeEdge {
  cursor: string;
  node: KEGGPathwayNode;
}
export class KEGGPathwayNode {
  id: number;
  keggId: string;
  name: string;
  kgml: string;
  image: string
}

