import * as Types from "../types/DemonTypes";

export const leaderNames: Types.LeaderName[] = [
  Types.Warrior,
  Types.Schemer,
  Types.Zealot,
];

export const leaderDemonMap: Record<Types.LeaderName, Types.LeaderDemonData> = {
  [Types.Warrior]: {
    cost: 0,
    name: Types.Warrior,
    type: Types.DemonType.Leader,
    move: 6,
    life: 15,
    combat: 7,
    abilities: [
      {
        name: "Combat Master",
        text: "Whenever the Warrior makes a Combat roll (Attack or Defense), they may choose to change the value of any one combat dice to 6.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
  [Types.Schemer]: {
    cost: 0,
    name: Types.Schemer,
    type: Types.DemonType.Leader,
    move: 8,
    life: 11,
    combat: 5,
    abilities: [
      {
        name: "Master Manipulator",
        text: "Whenever the Schemer activates, he may choose to remove one die from your set of activation dice when his turn is complete. If he does so, another demon within 12” may instead be activated and take their turn immediately. In addition, once per round, when an enemy demon would attack the Schemer, the Schemer may choose to remove one unspent activation die. If he does so, he may move. The attacker may still choose to attack any other target in range after this move is completed.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
  [Types.Zealot]: {
    cost: 0,
    name: Types.Zealot,
    type: Types.DemonType.Leader,
    move: 7,
    life: 13,
    combat: 6,
    abilities: [
      {
        name: "Frenzy",
        text: "Whenever the Zealot makes a Combat Attack roll, they increase their combat score by 2. If they are attacking an enemy Leader, they instead increase their combat score by 3.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
};

export const devoutNames: Types.DevoutName[] = [
  Types.LordOfThePit,
  Types.Succubus,
  Types.MadnessDemon,
  Types.Tallyman,
  Types.Executioner,
  Types.VoidDemon,
];

export const devoutDemonMap: Record<Types.DevoutName, Types.DevoutDemonData> = {
  [Types.LordOfThePit]: {
    cost: 0,
    name: Types.LordOfThePit,
    type: Types.DemonType.Devout,
    move: 8,
    life: 12,
    combat: 7,
    canFly: true,
    abilities: [
      {
        name: "A Worthy Sacrifice",
        text: "Once per game, you may destroy any friendly demon within 3” of this model. If you do so, the Lord of the Pit heals an amount of life equal to the destroyed demon's current life (you gain a Soul Dice as normal for slaying the demon)",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Righteousness",
        text: "The Lord of the Pit starts the battle with a Righteousness score of 0. Every time they slay an enemy model, they gain 1 Righteousness. Each time you make a Combat Dice roll, you may increase the result of a single die by an amount equal to the Lord of the Pit’s current Righteousness.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "You start the game with 1 Righteousness.",
    superiorEvolution:
      "Increase your Combat ability by 1 and increase your Life ability by 2.",
    resourceAmount: 0,
    resourcesName: "Righteousness",
  },
  [Types.Succubus]: {
    cost: 0,
    name: Types.Succubus,
    type: Types.DemonType.Devout,
    move: 6,
    life: 9,
    combat: 4,
    canFly: true,
    abilities: [
      {
        name: "Too Charming",
        text: "Once per round, when the Succubus is within 3” of an enemy, as the demon’s action, they may Charm a single enemy. You may move that demon up to its normal Move ability and make a Combat Attack against any demon of your choice. ",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Iniquity",
        text: "Succubus starts the battle with an Iniquity score of 0. Every time a friendly model slays a demon, increase the Iniquity score by 1. Whenever damage is dealt to the Succubus, you may reduce the damage by an amount equal to or less than the Succubus’ current Iniquity score. If you do, reduce the succubus current Iniquity score by an amount equal to the damage prevented.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Move ability of the Succubus by 2.",
    superiorEvolution:
      "When the Succubus uses her Too Charming ability, increase the Succubus’ Iniquity score by 2.",
    resourceAmount: 0,
    resourcesName: "Iniquity",
  },
  [Types.MadnessDemon]: {
    cost: 0,
    name: Types.MadnessDemon,
    type: Types.DemonType.Devout,
    move: 5,
    life: 11,
    combat: 3,
    abilities: [
      {
        name: "Infected with Madness",
        text: "Once per round, when an enemy is making a Combat Attack roll within 3” of the Madness Demon, before the roll is made, the Madness Demon can change the Combat Attack ability of the enemy to his own. This exchange lasts until the end of the round.",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Disorder",
        text: "The Madness Demon starts the battle with a Disorder score of 0. Every time during the game any Combat roll includes triple 1s (it must be a triple – quadruples, etc. do not count), the Disorder score increases by 1. The Madness Demon may add the Disorder score to their Combat Ability when making Combat Defense rolls.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution:
      "The Madness Demon begins the game with a Disorder score of 1.",
    superiorEvolution:
      "Increase the Madness Demon's Life ability and Move ability by 1.",
    resourceAmount: 0,
    resourcesName: "Disorder",
  },
  [Types.Tallyman]: {
    cost: 0,
    name: Types.Tallyman,
    type: Types.DemonType.Devout,
    move: 4,
    life: 11,
    combat: 5,
    abilities: [
      {
        name: "Balance the Scales",
        text: "When the enemy spends a Soul Dice, you may roll a dice. On the result of a 4+, you gain one Soul Dice (immediately roll a dice and add it to your playsheet as though you had slain a demon).",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Tax",
        text: "The Tallyman starts the battle with a Tax score of 3. Every time a friendly model is slain, increase the Tax score of the Tallyman by 1. Whenever the Tallyman slays an enemy, you may roll a d6. If the result of that dice is less than or equal to the current Tax score, you gain an additional soul.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Life ability and Combat ability by 1.",
    superiorEvolution: "The Tallyman begins the game with a Tax score of 4.",
    resourceAmount: 3,
    resourcesName: "Tax",
  },
  [Types.Executioner]: {
    cost: 0,
    name: Types.Executioner,
    type: Types.DemonType.Devout,
    move: 5,
    life: 12,
    combat: 8,
    abilities: [
      {
        name: "Off with their Head",
        text: "When making a Combat Attack roll against an enemy with 4 or less Life remaining, the Executioner may reroll any of their Combat Attack dice.",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Justice",
        text: "The Executioner starts the battle with a Justice score of 0. Every time they slay an enemy model that has dealt any damage to your cabal, you gain 1 Justice. Each time you make a Combat Defense roll, you may increase the result of a single die by an amount equal to the Executioner’s current Justice. ",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution:
      "When making a Combat Attack roll, if the Executioner rolls three 6s, the attack deals double damage.",
    superiorEvolution:
      "Increase your Combat ability by 1 and the Executioner begins the game with 1 Justice.",
    resourceAmount: 0,
    resourcesName: "Justice",
  },
  [Types.VoidDemon]: {
    cost: 0,
    name: Types.VoidDemon,
    type: Types.DemonType.Devout,
    move: 8,
    life: 10,
    combat: 7,
    abilities: [
      {
        name: "One With Nothing",
        text: "Once per game, when the Void Demon is slain, it is instead not slain and may be placed anywhere on the board, more than 3” away from any enemies. If the Void Demon is set up in this way, it has 5 Life and may not be healed by any method. ",
        type: Types.AbilityType.SpecialAbility,
      },
      {
        name: "Oblivion",
        text: "The Void Demon starts the battle with an Oblivion score of 0. Every time a model is slain, increase the Void Demon’s Oblivion score by 1. When moving, the Void Demon may instead be removed from the board and set-up anywhere within a number of inches equal to their move ability plus their Oblivion score.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution:
      "The Void Demon does not suffer any negative effects of area terrain (i.e. it can not be damaged, nor suffer any penalties from such terrain).",
    superiorEvolution:
      "The Void Demon begins the game with an Oblivion score of 2.",
    resourceAmount: 0,
    resourcesName: "Oblivion",
  },
};

export const lesserDemonNames: Types.LesserDemonName[] = [
  Types.SlaughterFiend,
  Types.Mephit,
  Types.TentacleBeast,
  Types.ArmoredDemon,
  Types.SpinedDemon,
  Types.CorpulentDemon,
];

export const greaterDemonNames: Types.GreaterDemonName[] = [
  Types.TortureMaster,
  Types.SerpentKnight,
  Types.MarquessDWinter,
];

export const superiorDemonNames: Types.SuperiorDemonName[] = [
  Types.ShadowKing,
  Types.LordOfFlame,
  Types.VenomQueen,
];

export const rosterDemonNames: Types.RosterDemonName[] = [
  Types.SlaughterFiend,
  Types.Mephit,
  Types.TentacleBeast,
  Types.ArmoredDemon,
  Types.SpinedDemon,
  Types.CorpulentDemon,
  Types.TortureMaster,
  Types.SerpentKnight,
  Types.MarquessDWinter,
  Types.ShadowKing,
  Types.LordOfFlame,
  Types.VenomQueen,
];

export const rosterDemonMap: Record<
  Types.RosterDemonName,
  Types.RosterDemonData
> = {
  [Types.SlaughterFiend]: {
    name: Types.SlaughterFiend,
    type: Types.DemonType.Lesser,
    cost: 21,
    move: 5,
    life: 10,
    combat: 6,
    abilities: [
      {
        name: "Paragons of Slaughter",
        text: "When the Slaughter Fiend uses Focused Combat, they gain +2 to their Combat ability for the Attack roll (they gain +1 to Combat Defense rolls as normal).",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Combat ability by 1.",
    superiorEvolution: "Increase the Combat ability and Life by 1.",
  },
  [Types.Mephit]: {
    name: Types.Mephit,
    type: Types.DemonType.Lesser,
    cost: 16,
    move: 9,
    life: 7,
    combat: 3,
    canFly: true,
    abilities: [
      {
        name: "Sting and Move",
        text: "When using Running Skirmish, the Mephit may increase their Move ability by 3",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Move ability by 1",
    superiorEvolution: "Increase the Move ability and the Combat ability by 1.",
  },
  [Types.TentacleBeast]: {
    name: Types.TentacleBeast,
    type: Types.DemonType.Lesser,
    cost: 21,
    move: 8,
    life: 9,
    combat: 4,
    abilities: [
      {
        name: "Grappling Arms",
        text: "Enemy demons within 1” of any Tentacle Beast reduce their Combat Ability by 1.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Combat ability by 1.",
    superiorEvolution:
      "Increase the Move ability by 1 and the Tentacle Beast also reduces the Movement ability of all enemies within 1” by 3”.",
  },
  [Types.ArmoredDemon]: {
    name: Types.ArmoredDemon,
    type: Types.DemonType.Lesser,
    cost: 22,
    move: 4,
    life: 13,
    combat: 5,
    abilities: [
      {
        name: "Steely Skin",
        text: "When the Armored Demon rolls Combat Defense dice, they may choose to change the result of any one Combat Defense die to a 6.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution:
      "When using Steely Skin, the Iron Demon may change the result of 2 Combat dice to a 6.",
    superiorEvolution: "Increase the Combat ability and Life by 1.",
  },
  [Types.SpinedDemon]: {
    name: Types.SpinedDemon,
    type: Types.DemonType.Lesser,
    cost: 19,
    move: 6,
    life: 7,
    combat: 6,
    abilities: [
      {
        name: "Impaling Charge",
        text: "When the Spined Demon uses Charge, they may reroll up to 3 dice from their Combat Attack roll.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Movement ability by 1.",
    superiorEvolution:
      "If the Spined Demon deals damage when making an attack, increase the damage dealt by 1.",
  },
  [Types.CorpulentDemon]: {
    name: Types.CorpulentDemon,
    type: Types.DemonType.Lesser,
    cost: 17,
    move: 4,
    life: 15,
    combat: 4,
    abilities: [
      {
        name: "Pile of Flesh",
        text: "When the Corpulent Demon activates, they heal 2 damage.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    greaterEvolution: "Increase the Life ability by 2.",
    superiorEvolution:
      "When the Pile of Flesh ability triggers, it heals one additional Life.",
  },
  [Types.TortureMaster]: {
    name: Types.TortureMaster,
    type: Types.DemonType.Greater,
    cost: 27,
    move: 6,
    life: 10,
    combat: 6,
    abilities: [
      {
        name: "Heed the Lash",
        text: "When the Torture Master attacks, each Combat Attack dice that results in a 6 reduces either the Move, Life or Combat of the target by 1 for the rest of the game. When you reduce Life in this way, both their maximum and current Life ability are reduced by this amount.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    superiorEvolution: "Increase the Combat ability and Life ability by 1.",
  },
  [Types.SerpentKnight]: {
    name: Types.SerpentKnight,
    type: Types.DemonType.Greater,
    cost: 26,
    move: 7,
    life: 11,
    combat: 7,
    abilities: [
      {
        name: "Stinging Poison",
        text: "When the Serpent Knight attacks, each Combat Attack dice that results in a 6 deals 2 damage instead of 1.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    superiorEvolution: "Increase the Move ability by 2.",
  },
  [Types.MarquessDWinter]: {
    name: Types.MarquessDWinter,
    type: Types.DemonType.Greater,
    cost: 24,
    move: 4,
    life: 11,
    combat: 6,
    abilities: [
      {
        name: "Touch of Winter",
        text: "When another demon makes a Combat Attack roll against the Marquess d’Winter, increase the target number needed to hit by 1.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
    superiorEvolution: "Increase the Combat ability and Life ability by 1.",
  },
  [Types.ShadowKing]: {
    name: Types.ShadowKing,
    type: Types.DemonType.Superior,
    cost: 33,
    move: 7,
    canFly: true,
    life: 10,
    combat: 6,
    abilities: [
      {
        name: "Shadow and Smoke",
        text: "Once per round, when the Shadow King is attacked, they may reduce all damage dealt to them by a single attacker to 0.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
  [Types.LordOfFlame]: {
    name: Types.LordOfFlame,
    type: Types.DemonType.Superior,
    cost: 36,
    move: 8,
    canFly: true,
    life: 11,
    combat: 7,
    abilities: [
      {
        name: "Ignition",
        text: "When the Lord of Flame attacks, deal 1 damage to all demons within 3” of the Lord of Flame for each natural 6 rolled as part of the Combat Attack roll.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
  [Types.VenomQueen]: {
    name: Types.VenomQueen,
    type: Types.DemonType.Superior,
    cost: 31,
    move: 5,
    life: 13,
    combat: 5,
    abilities: [
      {
        name: "Melting Touch",
        text: "When the Venom Queen attacks, any enemy damaged suffers the same amount of damage dealt the next time they activate.",
        type: Types.AbilityType.SpecialAbility,
      },
    ],
  },
};

// export const demons: Array<Types.AnyDemonData> = [
//   {
//     cost: 0,
//     name: Types.Warrior,
//     type: Types.DemonType.Leader,
//     move: 6,
//     life: 15,
//     combat: 7,
//     abilities: [
//       "Combat Master - Whenever the Warrior makes a Combat roll (Attack or Defense), they may choose to change the value of any one combat dice to 6.",
//     ],
//   },
//   {
//     cost: 0,
//     name: Types.Schemer,
//     type: Types.DemonType.Leader,
//     move: 8,
//     life: 11,
//     combat: 5,
//     abilities: [
//       "Master Manipulator - Whenever the Schemer activates, he may choose to remove one die from your set of activation dice when his turn is complete. If he does so, another demon within 12” may instead be activated and take their turn immediately. In addition, once per round, when an enemy demon would attack the Schemer, the Schemer may choose to remove one unspent activation die. If he does so, he may move. The attacker may still choose to attack any other target in range after this move is completed.",
//     ],
//   },
//   {
//     cost: 0,
//     name: Types.Zealot,
//     type: Types.DemonType.Leader,
//     move: 7,
//     life: 13,
//     combat: 6,
//     abilities: [
//       "Frenzy - Whenever the Zealot makes a Combat Attack roll, they increase their combat score by 2. If they are attacking an enemy Leader, they instead increase their combat score by 3.",
//     ],
//   },
//   {
//     cost: 0,
//     name: Types.LordOfThePit,
//     type: Types.DemonType.Devout,
//     move: 8,
//     life: 12,
//     combat: 7,
//     canFly: true,
//     abilities: [
//       "A Worthy Sacrifice - Once per game, you may destroy any friendly demon within 3” of this model. If you do so, the Lord of the Pit heals an amount of life equal to the destroyed demon's current life (you gain a Soul Dice as normal for slaying the demon)",
//       "Righteousness - The Lord of the Pit starts the battle with a Righteousness score of 0. Every time they slay an enemy model, they gain 1 Righteousness. Each time you make a Combat Dice roll, you may increase the result of a single die by an amount equal to the Lord of the Pit’s current Righteousness.",
//     ],
//     greaterEvolution: "You start the game with 1 Righteousness.",
//     superiorEvolution:
//       "Increase your Combat ability by 1 and increase your Life ability by 2.",
//     resourceAmount: 0,
//     resourcesName: "Righteousness",
//   },
//   {
//     cost: 0,
//     name: Types.Succubus,
//     type: Types.DemonType.Devout,
//     move: 6,
//     life: 9,
//     combat: 4,
//     canFly: true,
//     abilities: [
//       "Too Charming - Once per round, when the Succubus is within 3” of an enemy, as the demon’s action, they may Charm a single enemy. You may move that demon up to its normal Move ability and make a Combat Attack against any demon of your choice. ",
//       "Iniquity - Succubus starts the battle with an Iniquity score of 0. Every time a friendly model slays a demon, increase the Iniquity score by 1. Whenever damage is dealt to the Succubus, you may reduce the damage by an amount equal to or less than the Succubus’ current Iniquity score. If you do, reduce the succubus current Iniquity score by an amount equal to the damage prevented.",
//     ],
//     greaterEvolution: "Increase the Move ability of the Succubus by 2.",
//     superiorEvolution:
//       "When the Succubus uses her Too Charming ability, increase the Succubus’ Iniquity score by 2.",
//     resourceAmount: 0,
//     resourcesName: "Iniquity",
//   },
//   {
//     cost: 0,
//     name: Types.MadnessDemon,
//     type: Types.DemonType.Devout,
//     move: 5,
//     life: 11,
//     combat: 3,
//     abilities: [
//       "Infected with Madness - Once per round, when an enemy is making a Combat Attack roll within 3” of the Madness Demon, before the roll is made, the Madness Demon can change the Combat Attack ability of the enemy to his own. This exchange lasts until the end of the round.",
//       "Disorder - The Madness Demon starts the battle with a Disorder score of 0. Every time during the game any Combat roll includes triple 1s (it must be a triple – quadruples, etc. do not count), the Disorder score increases by 1. The Madness Demon may add the Disorder score to their Combat Ability when making Combat Defense rolls.",
//     ],
//     greaterEvolution:
//       "The Madness Demon begins the game with a Disorder score of 1.",
//     superiorEvolution:
//       "Increase the Madness Demon's Life ability and Move ability by 1.",
//     resourceAmount: 0,
//     resourcesName: "Disorder",
//   },
//   {
//     cost: 0,
//     name: Types.Tallyman,
//     type: Types.DemonType.Devout,
//     move: 4,
//     life: 11,
//     combat: 5,
//     abilities: [
//       "Balance the Scales - When the enemy spends a Soul Dice, you may roll a dice. On the result of a 4+, you gain one Soul Dice (immediately roll a dice and add it to your playsheet as though you had slain a demon).",
//       "Tax - The Tallyman starts the battle with a Tax score of 3. Every time a friendly model is slain, increase the Tax score of the Tallyman by 1. Whenever the Tallyman slays an enemy, you may roll a d6. If the result of that dice is less than or equal to the current Tax score, you gain an additional soul.",
//     ],
//     greaterEvolution: "Increase the Life ability and Combat ability by 1.",
//     superiorEvolution: "The Tallyman begins the game with a Tax score of 4.",
//     resourceAmount: 3,
//     resourcesName: "Tax",
//   },
//   {
//     cost: 0,
//     name: Types.Executioner,
//     type: Types.DemonType.Devout,
//     move: 5,
//     life: 12,
//     combat: 8,
//     abilities: [
//       "Off with their Head - When making a Combat Attack roll against an enemy with 4 or less Life remaining, the Executioner may reroll any of their Combat Attack dice.",
//       "Justice - The Executioner starts the battle with a Justice score of 0. Every time they slay an enemy model that has dealt any damage to your cabal, you gain 1 Justice. Each time you make a Combat Defense roll, you may increase the result of a single die by an amount equal to the Executioner’s current Justice. ",
//     ],
//     greaterEvolution:
//       "When making a Combat Attack roll, if the Executioner rolls three 6s, the attack deals double damage.",
//     superiorEvolution:
//       "Increase your Combat ability by 1 and the Executioner begins the game with 1 Justice.",
//     resourceAmount: 0,
//     resourcesName: "Justice",
//   },
//   {
//     cost: 0,
//     name: Types.VoidDemon,
//     type: Types.DemonType.Devout,
//     move: 8,
//     life: 10,
//     combat: 7,
//     abilities: [
//       "One With Nothing - Once per game, when the Void Demon is slain, it is instead not slain and may be placed anywhere on the board, more than 3” away from any enemies. If the Void Demon is set up in this way, it has 5 Life and may not be healed by any method. ",
//       "Oblivion - The Void Demon starts the battle with an Oblivion score of 0. Every time a model is slain, increase the Void Demon’s Oblivion score by 1. When moving, the Void Demon may instead be removed from the board and set-up anywhere within a number of inches equal to their move ability plus their Oblivion score.",
//     ],
//     greaterEvolution:
//       "The Void Demon does not suffer any negative effects of area terrain (i.e. it can not be damaged, nor suffer any penalties from such terrain).",
//     superiorEvolution:
//       "The Void Demon begins the game with an Oblivion score of 2.",
//     resourceAmount: 0,
//     resourcesName: "Oblivion",
//   },
//   {
//     name: Types.SlaughterFiend,
//     type: Types.DemonType.Lesser,
//     cost: 21,
//     move: 5,
//     life: 10,
//     combat: 6,
//     abilities: [
//       "Paragons of Slaughter - When the Slaughter Fiend uses Focused Combat, they gain +2 to their Combat ability for the Attack roll (they gain +1 to Combat Defense rolls as normal). ",
//     ],
//     greaterEvolution: "Increase the Combat ability by 1.",
//     superiorEvolution: "Increase the Combat ability and Life by 1.",
//   },
//   {
//     name: Types.Mephit,
//     type: Types.DemonType.Lesser,
//     cost: 16,
//     move: 9,
//     life: 7,
//     combat: 3,
//     canFly: true,
//     abilities: [
//       "Sting and Move - When using Running Skirmish, the Mephit may increase their Move ability by 3",
//     ],
//     greaterEvolution: "Increase the Move ability by 1",
//     superiorEvolution: "Increase the Move ability and the Combat ability by 1.",
//   },
//   {
//     name: Types.TentacleBeast,
//     type: Types.DemonType.Lesser,
//     cost: 21,
//     move: 8,
//     life: 9,
//     combat: 4,
//     abilities: [
//       "Grappling Arms - Enemy demons within 1” of any Tentacle Beast reduce their Combat Ability by 1.",
//     ],
//     greaterEvolution: "Increase the Combat ability by 1.",
//     superiorEvolution:
//       "Increase the Move ability by 1 and the Tentacle Beast also reduces the Movement ability of all enemies within 1” by 3”.",
//   },
//   {
//     name: Types.ArmoredDemon,
//     type: Types.DemonType.Lesser,
//     cost: 22,
//     move: 4,
//     life: 13,
//     combat: 5,
//     abilities: [
//       "Steely Skin - When the Armored Demon rolls Combat Defense dice, they may choose to change the result of any one Combat Defense die to a 6.",
//     ],
//     greaterEvolution:
//       "When using Steely Skin, the Iron Demon may change the result of 2 Combat dice to a 6.",
//     superiorEvolution: "Increase the Combat ability and Life by 1.",
//   },
//   {
//     name: Types.SpinedDemon,
//     type: Types.DemonType.Lesser,
//     cost: 19,
//     move: 6,
//     life: 7,
//     combat: 6,
//     abilities: [
//       "Impaling Charge - When the Spined Demon uses Charge, they may reroll up to 3 dice from their Combat Attack roll.",
//     ],
//     greaterEvolution: "Increase the Movement ability by 1.",
//     superiorEvolution:
//       "If the Spined Demon deals damage when making an attack, increase the damage dealt by 1.",
//   },
//   {
//     name: Types.CorpulentDemon,
//     type: Types.DemonType.Lesser,
//     cost: 17,
//     move: 4,
//     life: 15,
//     combat: 4,
//     abilities: [
//       "Pile of Flesh - When the Corpulent Demon activates, they heal 2 damage.",
//     ],
//     greaterEvolution: "Increase the Life ability by 2.",
//     superiorEvolution:
//       "When the Pile of Flesh ability triggers, it heals one additional Life.",
//   },
//   {
//     name: Types.TortureMaster,
//     type: Types.DemonType.Greater,
//     cost: 27,
//     move: 6,
//     life: 10,
//     combat: 6,
//     abilities: [
//       "Heed the Lash - When the Torture Master attacks, each Combat Attack dice that results in a 6 reduces either the Move, Life or Combat of the target by 1 for the rest of the game. When you reduce Life in this way, both their maximum and current Life ability are reduced by this amount.",
//     ],
//     superiorEvolution: "Increase the Combat ability and Life ability by 1.",
//   },
//   {
//     name: Types.SerpentKnight,
//     type: Types.DemonType.Greater,
//     cost: 26,
//     move: 7,
//     life: 11,
//     combat: 7,
//     abilities: [
//       "Stinging Poison - When the Serpent Knight attacks, each Combat Attack dice that results in a 6 deals 2 damage instead of 1.",
//     ],
//     superiorEvolution: "Increase the Move ability by 2.",
//   },
//   {
//     name: Types.MarquessDWinter,
//     type: Types.DemonType.Greater,
//     cost: 24,
//     move: 4,
//     life: 11,
//     combat: 6,
//     abilities: [
//       "Touch of Winter - When another demon makes a Combat Attack roll against the Marquess d’Winter, increase the target number needed to hit by 1.",
//     ],
//     superiorEvolution: "Increase the Combat ability and Life ability by 1.",
//   },
//   {
//     name: Types.ShadowKing,
//     type: Types.DemonType.Superior,
//     cost: 33,
//     move: 7,
//     canFly: true,
//     life: 10,
//     combat: 6,
//     abilities: [
//       "Shadow and Smoke - Once per round, when the Shadow King is attacked, they may reduce all damage dealt to them by a single attacker to 0.",
//     ],
//   },
//   {
//     name: Types.LordOfFlame,
//     type: Types.DemonType.Superior,
//     cost: 36,
//     move: 8,
//     canFly: true,
//     life: 11,
//     combat: 7,
//     abilities: [
//       "Ignition - When the Lord of Flame attacks, deal 1 damage to all demons within 3” of the Lord of Flame for each natural 6 rolled as part of the Combat Attack roll.",
//     ],
//   },
//   {
//     name: Types.VenomQueen,
//     type: Types.DemonType.Superior,
//     cost: 31,
//     move: 5,
//     life: 13,
//     combat: 5,
//     abilities: [
//       "Melting Touch - When the Venom Queen attacks, any enemy damaged suffers the same amount of damage dealt the next time they activate.",
//     ],
//   },
// ];

export const philosophyNames: Types.PhilosophyName[] = [
  Types.LordsOfHell,
  Types.EarthBound,
  Types.Demented,
  Types.Brokers,
  Types.Judges,
  Types.TheEmpty,
];

export const philosophyMap: Record<Types.PhilosophyName, Types.Philosophy> = {
  [Types.LordsOfHell]: {
    name: Types.LordsOfHell,
    leaderBonus:
      "Imperious Nature - Your Leader's natural majesty and power is hard for others to overcome. Reduce the Combat Attack dice of any enemy attacking your Leader by 1.",
    specialAbility:
      "Charismatic Leader - When building your cabal, you may recruit one additional lesser Minion for free.",
    devout: Types.LordOfThePit,
  },
  [Types.EarthBound]: {
    name: Types.EarthBound,
    leaderBonus:
      "Quick Escape - The first time in a turn an enemy moves within 1” of your Leader, if your Leader has not yet activated, you may remove an unspent activation dice. If you do so, your Leader may immediately activate before the enemy makes any attacks and take their turn. They may only move during this turn.",
    specialAbility:
      "Ready to Move - Earth-Bound demons increase their Move ability by 1.",
    devout: Types.Succubus,
  },
  [Types.Demented]: {
    name: Types.Demented,
    leaderBonus:
      "Maddening Insight - When rolling initiative, as long as your Leader is alive, you may reroll any number of your initiative dice.",
    specialAbility:
      "Unpredictable Defense - When rolling your Combat Defense dice, if you roll any triples (only triples – quadruples, et al. do not count), you may deal an amount of damage back to the attacker equal to the face of the triple roll (i.e. if you roll three 4s, you deal 4 damage to the attacker). If you roll multiple triples (i.e. three 1s and three 5s), choose the highest face value and you deal that amount of damage.",
    devout: Types.MadnessDemon,
  },
  [Types.Brokers]: {
    name: Types.Brokers,
    leaderBonus:
      "Rich in Soul - Your Leader begins with a bonus Essence (you may choose two instead of one at creation).",
    specialAbility:
      "Tip the Scales - Each time you gain a Soul Dice, you may roll a d6. On a 5+, you gain one additional Soul Dice.",
    devout: Types.Tallyman,
  },
  [Types.Judges]: {
    name: Types.Judges,
    leaderBonus:
      "Breaking the Rules - The first time your Leader would be reduced to 0 Life, they are not. Any additional damage they suffer is negated from that attack and they are instead at 1 Life.",
    specialAbility:
      "Enforcing the Rules - Once per round, when an enemy demon makes a Combat Attack against a Judges demon, you may choose to Enforce the Rules. If you do, the attacker may not benefit from or activate any Special Abilities as part of the attack",
    devout: Types.Executioner,
  },
  [Types.TheEmpty]: {
    name: Types.TheEmpty,
    leaderBonus:
      "One with Nothing - Once per game, when your Leader activates, before any actions or move are taken, you may remove them from the game. During your next turn, you may allocate initiative to your Leader and replace them on the board anywhere more than 3” away from an enemy. The Leader may then act as normal for that activation.",
    specialAbility:
      "Burn it All - When any Empty demon is within 1” of an objective or a piece of terrain no larger than 4” by 4”, you may roll your Combat Attack dice instead of attacking. If you do so and roll at least two 6s, then that objective or piece of terrain is destroyed (in the case of terrain, remove the terrain and replace it with rubble of a similar size no more than 1” high).",
    devout: Types.VoidDemon,
  },
};

export const philosophies: Array<Types.Philosophy> = [
  {
    name: Types.LordsOfHell,
    leaderBonus:
      "Imperious Nature - Your Leader's natural majesty and power is hard for others to overcome. Reduce the Combat Attack dice of any enemy attacking your Leader by 1.",
    specialAbility:
      "Charismatic Leader - When building your cabal, you may recruit one additional lesser Minion for free.",
    devout: Types.LordOfThePit,
  },
  {
    name: Types.EarthBound,
    leaderBonus:
      "Quick Escape - The first time in a turn an enemy moves within 1” of your Leader, if your Leader has not yet activated, you may remove an unspent activation dice. If you do so, your Leader may immediately activate before the enemy makes any attacks and take their turn. They may only move during this turn.",
    specialAbility:
      "Ready to Move - Earth-Bound demons increase their Move ability by 1.",
    devout: Types.Succubus,
  },
  {
    name: Types.Demented,
    leaderBonus:
      "Maddening Insight - When rolling initiative, as long as your Leader is alive, you may reroll any number of your initiative dice.",
    specialAbility:
      "Unpredictable Defense - When rolling your Combat Defense dice, if you roll any triples (only triples – quadruples, et al. do not count), you may deal an amount of damage back to the attacker equal to the face of the triple roll (i.e. if you roll three 4s, you deal 4 damage to the attacker). If you roll multiple triples (i.e. three 1s and three 5s), choose the highest face value and you deal that amount of damage.",
    devout: Types.MadnessDemon,
  },
  {
    name: Types.Brokers,
    leaderBonus:
      "Rich in Soul - Your Leader begins with a bonus Essence (you may choose two instead of one at creation).",
    specialAbility:
      "Tip the Scales - Each time you gain a Soul Dice, you may roll a d6. On a 5+, you gain one additional Soul Dice.",
    devout: Types.Tallyman,
  },
  {
    name: Types.Judges,
    leaderBonus:
      "Breaking the Rules - The first time your Leader would be reduced to 0 Life, they are not. Any additional damage they suffer is negated from that attack and they are instead at 1 Life.",
    specialAbility:
      "Enforcing the Rules - Once per round, when an enemy demon makes a Combat Attack against a Judges demon, you may choose to Enforce the Rules. If you do, the attacker may not benefit from or activate any Special Abilities as part of the attack",
    devout: Types.Executioner,
  },
  {
    name: Types.TheEmpty,
    leaderBonus:
      "One with Nothing - Once per game, when your Leader activates, before any actions or move are taken, you may remove them from the game. During your next turn, you may allocate initiative to your Leader and replace them on the board anywhere more than 3” away from an enemy. The Leader may then act as normal for that activation.",
    specialAbility:
      "Burn it All - When any Empty demon is within 1” of an objective or a piece of terrain no larger than 4” by 4”, you may roll your Combat Attack dice instead of attacking. If you do so and roll at least two 6s, then that objective or piece of terrain is destroyed (in the case of terrain, remove the terrain and replace it with rubble of a similar size no more than 1” high).",
    devout: Types.VoidDemon,
  },
];

export const leaderEssenceNames: Types.LeaderEssenceName[] = [
  Types.SoulOfLightning,
  Types.PoisonedSoul,
  Types.UnyieldingEssence,
  Types.EternalMind,
  Types.ExplosiveSpirit,
  Types.MendingSoul,
  Types.SkirmishSpirit,
  Types.RegeneratingSoul,
  Types.SteadfastSoul,
];

export const leaderEssenceMap: Record<
  Types.LeaderEssenceName,
  Types.LeaderEssenceAbility
> = {
  [Types.SoulOfLightning]: {
    name: Types.SoulOfLightning,
    text: "Increases your Leader’s Move by 1”",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.PoisonedSoul]: {
    name: Types.PoisonedSoul,
    text: "When your Leader is making a Combat Defense roll, if they roll any natural 6, the attacker suffers 2 damage.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.UnyieldingEssence]: {
    name: Types.UnyieldingEssence,
    text: "Increases your Leader’s Life by 2.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.EternalMind]: {
    name: Types.EternalMind,
    text: "When you roll your activation dice, you may select one dice and reroll it if your Leader has not been slain.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.ExplosiveSpirit]: {
    name: Types.ExplosiveSpirit,
    text: "When your Leader is slain, you may roll your Combat Dice. Each roll of 4+ deals 1 damage to each demon within 3” of your slain Leader. No Soul Dice is granted when this Leader is slain.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.MendingSoul]: {
    name: Types.MendingSoul,
    text: "When rolling on the Soul Loss table after the battle to determine the fate of your demons, you may reroll one fate roll for your cabal.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.SkirmishSpirit]: {
    name: Types.SkirmishSpirit,
    text: "If your Leader uses Running Skirmish, their Move ability increases by 3” for that movement.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.RegeneratingSoul]: {
    name: Types.RegeneratingSoul,
    text: "When your Leader activates, they heal 1 Life. This has no effect if your Leader is at maximum Life.",
    type: Types.AbilityType.LeaderEssence,
  },
  [Types.SteadfastSoul]: {
    name: Types.SteadfastSoul,
    text: "When your Leader uses Focused Combat, they may choose to change the result of any one Combat Defense die to a 6.",
    type: Types.AbilityType.LeaderEssence,
  },
};

export const leaderRelicNames: Types.LeaderRelicName[] = [
  Types.SoulDrinker,
  Types.ScreamingShield,
  Types.InfernalArmor,
  Types.HammerOfThunder,
  Types.AxeOfBlackBlood,
  Types.PlateOfRimeIce,
  Types.TokenOfLuck,
  Types.NecklaceOfAdaptation,
  Types.BootsOfLeaping,
];

export const leaderRelicMap: Record<
  Types.LeaderRelicName,
  Types.LeaderRelicAbility
> = {
  [Types.SoulDrinker]: {
    name: Types.SoulDrinker,
    text: "When this demon makes a Combat Attack roll, each natural roll of 6 results in 2 damage instead of 1. If this demon’s attacks slay an enemy demon, the Leader heals 1 damage.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.ScreamingShield]: {
    name: Types.ScreamingShield,
    text: "This demon may never be hit on anything lower than a 3+ (they may not be hit on 2).",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.InfernalArmor]: {
    name: Types.InfernalArmor,
    text: "Whenever this demon suffers damage as a result of a Combat Attack, reduce the damage this demon suffers by 1.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.HammerOfThunder]: {
    name: Types.HammerOfThunder,
    text: "When this demon makes a Combat Attack roll, if any of the dice result in a natural 6, all enemies within 3” of this demon suffer 2 damage.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.AxeOfBlackBlood]: {
    name: Types.AxeOfBlackBlood,
    text: "This demon increases their Combat score by 1 for Combat Attack rolls.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.PlateOfRimeIce]: {
    name: Types.PlateOfRimeIce,
    text: "When this demon makes a Combat Defense roll, if any of the dice result in a natural 6, the enemy reduces their Movement score to 0 as long as this demon remains within ½ inch of that model.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.TokenOfLuck]: {
    name: Types.TokenOfLuck,
    text: "Once per round, this demon may reroll a single dice. This may not be used for the initiative roll.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.NecklaceOfAdaptation]: {
    name: Types.NecklaceOfAdaptation,
    text: "This demon may roll twice when making a check for any terrain and select either result.",
    type: Types.AbilityType.LeaderRelic,
  },
  [Types.BootsOfLeaping]: {
    name: Types.BootsOfLeaping,
    text: "This demon may ignore other demons when moving as though they had Fly. The demon may not end their move on another demon.",
    type: Types.AbilityType.LeaderRelic,
  },
};
