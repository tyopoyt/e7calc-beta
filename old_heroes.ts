// architect_laika_old: {
  //   name: 'Architect Laika (Pre-Balance)',
  //   element: HeroElement.light,
  //   class: HeroClass.mage,
  //   baseAttack: 1306,
  //   heroSpecific: ['casterSpeed'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 0.9,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.15],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 0.9,
  //       penetrate: (soulburn: boolean, inputValues: DamageFormData) => inputValues.targetTargeted ? 0.8 : 0,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.casterFinalSpeed() * 0.001125,
  //       multTip: () => ({ casterSpeed: 0.1125 }),
  //       enhance: [0.05, 0.05, 0.05, 0, 0.1, 0.15],
  //       noTrans: true,
  //       isAOE: () => true,
  //     }
  //   }
  // },

  // arunka_old: {
  //   name: 'Arunka (Pre-Balance)',
  //   element: HeroElement.earth,
  //   class: HeroClass.warrior,
  //   baseAttack: 1570,
  //   baseHP: 6488,
  //   baseDefense: 616,
  //   heroSpecific: ['targetHasBarrier'],
  //   dot: [DoT.bleed],
  //   innateAtkUp: () => 0.30,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //       noCrit: true,
  //     },
  //     s1_bis: {
  //     //       rate: () => 1.3,
  //       pow: () => 1.3,
  //       // enhanceFrom: 's1', Presumed not to inherit from s1 mola since the pow is so high already
  //       isSingle: () => true,
  //       noCrit: true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 1,
  //       penetrate: () => 0.7,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.targetHasBarrier ? 2.2 : 1,
  //       multTip: () => ({ targetHasBarrier: 120 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //       noCrit: true,
  //     },
  //   }
  // },

    // bad_cat_armin_old: {
  //   name: 'Bad Cat Armin (Pre-Balance)',
  //   element: HeroElement.dark,
  //   class: HeroClass.warrior,
  //   baseAttack: 912,
  //   heroSpecific: ['casterMaxHP'],
  //   barrier: (hero: Hero, skill: Skill, artifact: Artifact, inputValues: DamageFormData, attackMultiplier: number) => inputValues.casterFinalMaxHP(artifact)*0.15,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 1,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.06,
  //       flatTip: () => ({ casterMaxHP: 6 }),
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.3,
  //       pow: () => 1,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.2,
  //       flatTip: () => ({ casterMaxHP: 20 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //   }
  // },

    // briar_witch_iseria_old: {
  //   name: 'Briar Witch Iseria (Pre-Balance)',
  //   element: HeroElement.dark,
  //   class: HeroClass.ranger,
  //   baseAttack: 1182,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.85,
  //       pow: () => 1,
  //       afterMath: (hitType: HitType) => (hitType !== HitType.miss) ? { attackPercent: 0.3 } : null,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1.2 : 0.95,
  //       pow: () => 1.1,
  //       afterMath: (hitType: HitType) => (hitType !== HitType.miss) ? { attackPercent: 0.3 } : null,
  //       enhance: [0.05, 0, 0, 0, 0.15],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // celine_old: {
  //   name: 'Celine (Pre-Balance)',
  //   element: HeroElement.earth,
  //   class: HeroClass.thief,
  //   heroSpecific: ['exclusiveEquipment2', 'exclusiveEquipment3'],
  //   baseAttack: 1228,
  //   barrier: (hero: Hero, skill: Skill, artifact: Artifact, inputValues: DamageFormData, attackMultiplier: number) => hero.getAtk()*0.5,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 1,
  //       critDmgBoost: () => 0.2,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 1.4,
  //       pow: () => 1,
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment2 ? 0.1 : 0,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       noTrans: true,
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 2.3 : 1.8,
  //       pow: () => 1,
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment3 ? 0.1 : 0,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     }
  //   }
  // },

  // chaos_sect_axe_old: {
  //   name: 'Chaos Sect Axe (Pre-Balance)',
  //   element: HeroElement.dark,
  //   class: HeroClass.warrior,
  //   baseAttack: 1144,
  //   heroSpecific: ['casterMaxHP', casterAttackedStack_5],
  //   dot: [DoT.bleed],
  //   atkUp: () => 1 + casterAttackedStack_5.value()*0.06,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.85,
  //       pow: () => 0.95,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.04,
  //       flatTip: () => ({ casterMaxHP: 4 }),
  //       enhance: [0.05, 0.05, 0.1, 0.15],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 0.75,
  //       pow: () => 0.95,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.05,
  //       flatTip: () => ({ casterMaxHP: 5 }),
  //       enhance: [0.05, 0.05, 0.1, 0.15],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.2,
  //       pow: () => 0.9,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.1,
  //       flatTip: () => ({ casterMaxHP: 10 }),
  //       penetrate: () => document.getElementById(`elem-adv`).checked ? 0.4 : 0,
  //       enhance: [0.05, 0.05, 0.05, 0, 0, 0.1, 0.15],
  //       isSingle: () => true,
  //     }
  //   }
  // },

    // hwayoung_old: {
  //   name: 'Hwayoung (Pre-Balance)',
  //   element: HeroElement.fire,
  //   class: HeroClass.warrior,
  //   baseAttack: 1510,
  //   heroSpecific: ['casterBuffed', casterMaxHP, 'targetMaxHP'],
  //   barrier: (hero: Hero, skill: Skill, artifact: Artifact, inputValues: DamageFormData, attackMultiplier: number) => hero.getAtk()*0.45,
  //   innateAtkUp: () => {
  //     let boost = 0.35;
  //     for (let i = 0; i < Number(document.getElementById(`molagora-s2`).value); i++) {
  //       boost += heroes.hwayoung.skills.s2.enhance[i];
  //     }
  //     return boost;
  //   },
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.6,
  //       pow: () => 1,
  //       afterMath: (hitType: HitType, inputValues: DamageFormData) => inputValues.casterBuffed ? ({ attackPercent: 0.5 }) : null,
  //       enhance: [0.05, 0, 0.1, 0, 0.15],
  //       isSingle: () => true,
  //       noCrit: true,
  //     },
  //     s2: new Skill({
  //       enhance: [0.02, 0.03, 0.03, 0.03, 0.04],
  //     },
  //     s3: new Skill({
  //       rate: () => 0.55,
  //       pow: () => 1,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact) < inputValues.targetFinalMaxHP()
  //           ? 1 + Math.min((inputValues.targetFinalMaxHP() - inputValues.casterFinalMaxHP(artifact))*0.00015, 1)
  //           : 1,
  //       multTip: () => ({ caster_vs_target_hp_diff: 15 }),
  //       penetrate: () => 1,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //       noCrit: true,
  //     },
  //   }
  // },

    // ilynav_old: {
  //   name: 'Ilynav (Pre-Balance)',
  //   element: HeroElement.fire,
  //   class: HeroClass.knight,
  //   baseAttack: 957,
  //   heroSpecific: ['casterMaxHP'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.7,
  //       pow: () => 1,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.08,
  //       flatTip: () => ({ casterMaxHP: 8 }),
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 1,
  //       pow: () => 1,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.18,
  //       flatTip: () => ({ casterMaxHP: 18 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.7,
  //       pow: () => 1,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.12,
  //       flatTip: () => ({ casterMaxHP: 12 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // jack_o_old: {
  //   name: 'Jack-O\' (Pre-Balance)',
  //   element: HeroElement.fire,
  //   class: HeroClass.warrior,
  //   heroSpecific: ['targetHasDebuff'],
  //   baseAttack: 1228,
  //   baseHP: 5784,
  //   baseDefense: 553,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.75,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s1_extra: {
  //     //       rate: () => 1.1,
  //       pow: () => 1,
  //       enhanceFrom: 's1',
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.95,
  //       pow: () => 1,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.targetHasDebuff ? 1.3 : 1,
  //       multTip: () => ({ targetHasDebuff: 30 }),
  //       penetrate: () => 0.5,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     }
  //   }
  // },

    // jena_old: {
  //   name: 'Jena (Pre-Balance)',
  //   element: HeroElement.ice,
  //   class: HeroClass.mage,
  //   baseAttack: 1063,
  //   heroSpecific: ['targetNumberOfDebuffs'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 0.95,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.targetNumberOfDebuffs*0.1,
  //       multTip: () => ({ per_target_debuff: 10 }),
  //       enhance: [0.05, 0.05, 0.1, 0.15],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1.1 : 0.85,
  //       pow: () => 0.95,
  //       enhance: [0.05, 0.05, 0, 0, 0.1, 0, 0.15],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // kise_old: {
  //   name: 'Kise (Pre-Balance)',
  //   element: HeroElement.ice,
  //   class: HeroClass.thief,
  //   baseAttack: 1283,
  //   barrier: (hero: Hero, skill: Skill, artifact: Artifact, inputValues: DamageFormData, attackMultiplier: number) => hero.getAtk() * 0.5,
  //   heroSpecific: [targetHasBuff, casterHasStealth, casterCurrentHPPercent, 'exclusiveEquipment2'],
  //   skills: {
  //     s1: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1.4 : 1.1,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0.1, 0.1, 0.1],
  //       mult: (soulburn: boolean) => {
  //         if (!inputValues.targetHasBuff) return 1;

  //         return soulburn ? 2 : 1.7;
  //       },
  //       multTip: (soulburn: boolean) => ({ target_debuff: soulburn ? 100 : 70 }),
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 0.8,
  //       pow: () => 1,
  //       penetrate: (soulburn: boolean, inputValues: DamageFormData) => inputValues.casterHasStealth ? 0.6 : 0.3,
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment2 ? 0.1 : 0,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.6,
  //       pow: () => 1,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.casterCurrentHPPercent*0.0035,
  //       multTip: () => ({ caster_left_hp_pc: 0.35 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     }
  //   }
  // },

    // last_rider_krau_old: {
  //   name: 'Last Rider Krau (Pre-Balance)',
  //   element: HeroElement.light,
  //   class: HeroClass.knight,
  //   baseAttack: 839,
  //   heroSpecific: ['casterMaxHP', 'attackSkillStack'],
  //   heroSpecificMaximums: {'attackSkillStack': 3},
  //   barrier: (hero: Hero, skill: Skill, artifact: Artifact, inputValues: DamageFormData, attackMultiplier: number) => inputValues.casterFinalMaxHP(artifact)*0.07,
  //   barrierEnhance: 's2',
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.7,
  //       pow: () => 1,
  //       flat: () => 0.1*inputValues.casterFinalMaxHP(artifact),
  //       flatTip: () => ({ casterMaxHP: 10 }),
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       enhance: [0.05, 0.1, 0.1, 0.1, 0.15]
  //     },
  //     s3: new Skill({
  //       noCrit: true,
  //       rate: () => 0.3,
  //       pow: () => 1,
  //       flat: () => 0.06*inputValues.casterFinalMaxHP(artifact),
  //       flatTip: () => ({ casterMaxHP: 6 }),
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.attackSkillStack*0.2,
  //       multTip: () => ({ per_stack: 20 }),
  //       penetrate: () => 1.0,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // lilias_old: {
  //   name: 'Lilias (Pre-Balance)',
  //   element: HeroElement.fire,
  //   class: HeroClass.knight,
  //   baseAttack: 821,
  //   heroSpecific: ['casterMaxHP', highest_ally_attack],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.8,
  //       pow: () => 0.95,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.12,
  //       flatTip: () => ({ casterMaxHP: 12 }),
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 1,
  //       atk: () => inputValues.highestAllyAttack,
  //       noBuff: true,
  //       enhance: [0.05, 0.05, 0, 0.05, 0.05, 0.1],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // lionheart_cermia_old: new Hero({
  //   element: HeroElement.light,
  //   class: HeroClass.warrior,
  //   baseAttack: 966,
  //   baseDefense: 668,
  //   baseHP: 5663,
  //   heroSpecific: ['casterDefense'],
  //   skills: {
  //     s1: new Skill({
  //       id: 's1',
  //       defenseScaling: true,
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1 : 0.6,
  //       pow: () => 0.9,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalDefense() * (soulburn ? 1.6 : 1.0),
  //       flatTip: (soulburn: boolean) => ({ casterDefense: (soulburn ? 160 : 100) }),
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     }),
  //     s3: new Skill({
  //       id: 's3',
  //       defenseScaling: true,
  //       rate: () => 0.3,
  //       pow: () => 0.9,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalDefense() * 1.35,
  //       flatTip: () => ({ casterDefense: 135 }),
  //       penetrate: () => 0.5,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.05, 0.05, 0.1],
  //       isAOE: () => true,
  //     }),
  //   }
  // }),

    // little_queen_charlotte_old: {
  //   name: 'Little Queen Charlotte (Pre-Balance)',
  //   element: HeroElement.light,
  //   class: HeroClass.warrior,
  //   baseAttack: 1119,
  //   baseHP: 6266,
  //   baseDefense: 627,
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1.2,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.5,
  //       pow: () => 1,
  //       mult: () => elementalAdvantage ? 1.3 : 1,
  //       multTip: () => ({ elementalAdvantage: 30 }),
  //       penetrate: () => 0.5,
  //       enhance: [0.05, 0.05, 0, 0.05, 0.15],
  //       isSingle: () => true,
  //     },
  //     s3_splash: {
  //     //       rate: () => 0,
  //       pow: () => 0,
  //       afterMath: () => elementalAdvantage ? { attackPercent: 1.2 } : null,
  //       noCrit: true,
  //       noMiss: true,
  //     }
  //   }
  // },

    // melissa_old: {
  //   name: 'Melissa (Pre-Balance)',
  //   element: HeroElement.fire,
  //   class: HeroClass.mage,
  //   baseAttack: 1412,
  //   heroSpecific: ['casterCurrentHPPercent', 'exclusiveEquipment2'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 1.1,
  //       mult: () => 1 + (100-inputValues.casterCurrentHPPercent)*0.0035,
  //       multTip: () => ({ caster_lost_hp_pc: 0.35 }),
  //       enhance: [0.05, 0, 0.05, 0, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 1.5,
  //       pow: () => 0.95,
  //       enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment2 ? 0.1 : 0,
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.2,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     }
  //   }
  // },

    // mui_old: {
  //   name: 'Mui (Pre-Balance)',
  //   element: HeroElement.earth,
  //   class: HeroClass.warrior,
  //   baseAttack: 1039,
  //   dot: [DoT.bleed],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 1,
  //       pow: () => 0.9,
  //       enhance: [0.05, 0, 0, 0.1, 0.15],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1,
  //       pow: () => 0.95,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.15],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // sez_old: {
  //   name: 'Sez (Pre-Balance)',
  //   element: HeroElement.ice,
  //   class: HeroClass.thief,
  //   baseAttack: 1228,
  //   heroSpecific: ['targetCurrentHPPercent'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 0.95,
  //       mult: () => 1 + (100-inputValues.targetCurrentHPPercent)*0.002,
  //       multTip: () => ({ target_lost_hp_pc: 0.2 }),
  //       enhance: [0.05, 0.05, 0.05, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 0.5,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 3.2 : 1.8,
  //       pow: () => 0.95,
  //       mult: (soulburn: boolean) => 1 + (100-inputValues.targetCurrentHPPercent)*(soulburn ? 0.007 : 0.003),
  //       multTip: (soulburn: boolean) => ({ target_lost_hp_pc: soulburn ? 0.7 : 0.3 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.15],
  //       isSingle: () => true,
  //     },
  //     explosion: {
  //     //       rate: () => 0,
  //       pow: () => 0,
  //       afterMath: () => ({ attackPercent: 1.5 }),
  //       noCrit: true,
  //       noMiss: true,
  //     }
  //   }
  // },

    // silk_old: new Hero({
  //   element: HeroElement.earth,
  //   class: HeroClass.ranger,
  //   baseAttack: 1188,
  //   baseHP: 4693,
  //   baseDefense: 518,
  //   heroSpecific: ['casterSpeed', 'casterFocus'],
  //   skills: {
  //     s1: new Skill({
  //       id: 's1',
  //       speedScaling: true,
  //       rate: () => 0.9,
  //       pow: () => 0.9,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.casterFinalSpeed() * 0.00075,
  //       multTip: () => ({ casterSpeed: 0.075 }),
  //       enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15],
  //       isSingle: () => true,
  //     }),
  //     s1_bis: new Skill({
  //       id: 's1_bis',
  //       s1Benefits: true,
  //       speedScaling: true,
  //       rate: () => 1.25,
  //       pow: () => 0.9,
  //       penetrate: () => 0.2,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.casterFinalSpeed() * 0.00075,
  //       multTip: () => ({ casterSpeed: 0.075 }),
  //       enhance: [0.05, 0.05, 0, 0.05, 0, 0.1, 0.15],
  //       isSingle: () => true,
  //     }),
  //     s3: new Skill({
  //       id: 's3',
  //       rate: () => 0.95,
  //       pow: () => 1.05,
  //       enhance: [0.1, 0, 0, 0.15],
  //       isAOE: () => true,
  //     })
  //   }
  // }),

    // summer_break_charlotte_old: {
  //   name: 'Summer Break Charlotte (Pre-Balance)',
  //   element: HeroElement.ice,
  //   class: HeroClass.knight,
  //   baseAttack: 957,
  //   baseHP: 6148,
  //   baseDefense: 634,
  //   heroSpecific: ['targetCurrentHPPercent'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 1.8,
  //       pow: () => 1,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + (100 - inputValues.targetCurrentHPPercent) * 0.0035,
  //       multTip: () => ({target_lost_hp_pc: 35}),
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isSingle: () => true,
  //     },
  //   }
  // },

    // tenebria_old: new Hero({
  //   element: HeroElement.fire,
  //   class: HeroClass.mage,
  //   baseAttack: 1359,
  //   baseHP: 4895,
  //   baseDefense: 652,
  //   skills: {
  //     s1: new Skill({
  //       id: 's1',
  //       rate: () => 1.2,
  //       pow: () => 1,
  //       enhance: [0.05, 0, 0.1, 0, 0.15],
  //       isSingle: () => true,
  //     }),
  //     s2: new Skill({
  //       id: 's2',
  //       rate: () => 0.8,
  //       pow: () => 1,
  //       enhance: [0.05, 0, 0.1, 0, 0.15],
  //       isAOE: () => true,
  //     }),
  //     s3: new Skill({
  //       id: 's3',
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1.35 : 1.1,
  //       pow: () => 1.05,
  //       enhance: [0.1, 0, 0, 0, 0.15],
  //       isAOE: () => true,
  //     })
  //   }
  // }),

    // tywin_old: {
  //   name: 'Tywin (Pre-Balance)',
  //   element: HeroElement.ice,
  //   class: HeroClass.knight,
  //   baseAttack: 821,
  //   heroSpecific: ['casterMaxHP'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.8,
  //       pow: () => 0.95,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.04,
  //       flatTip: () => ({ casterMaxHP: 4 }),
  //       enhance: [0.05, 0.05, 0, 0.1, 0, 0.15],
  //       isSingle: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 0.5,
  //       pow: () => 0.95,
  //       flat: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.casterFinalMaxHP(artifact)*0.1,
  //       flatTip: () => ({ casterMaxHP: 10 }),
  //       enhance: [0.05, 0.05, 0, 0, 0, 0.1, 0.15],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // vildred_old: {
  //   name: 'Vildred (Pre-Balance)',
  //   element: HeroElement.earth,
  //   class: HeroClass.thief,
  //   baseAttack: 1283,
  //   heroSpecific: ['casterSpeed', 'exclusiveEquipment2'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 0.85,
  //       pow: () => 0.95,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => 1 + inputValues.casterFinalSpeed()*0.00075,
  //       multTip: () => ({ casterSpeed: 0.075 }),
  //       enhance: [0.05, 0.05, 0.05, 0.1, 0.1]
  //     },
  //     s2: new Skill({
  //       rate: () => 0.5,
  //       pow: () => 1,
  //       enhance: [0.05, 0.05, 0.05, 0.05, 0.1],
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       soulburn: true,
  //       rate: (soulburn: boolean) => soulburn ? 1.1 : 0.85,
  //       pow: () => 1,
  //       mult: (soulburn: boolean) => 1 + inputValues.casterFinalSpeed()*(soulburn ? 0.0009 : 0.00075),
  //       multTip: (soulburn: boolean) => ({ casterSpeed: soulburn ? 0.09 : 0.075 }),
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment2 ? 0.1 : 0,
  //       enhance: [0.05, 0.05, 0, 0.1, 0.1],
  //       isAOE: () => true,
  //     }
  //   }
  // },

    // yufine_old: {
  //   name: 'Yufine (Pre-Balance)',
  //   element: HeroElement.earth,
  //   class: HeroClass.warrior,
  //   baseAttack: 1228,
  //   heroSpecific: [targetHasBuff, 'exclusiveEquipment2'],
  //   skills: {
  //     s1: new Skill({
  //       rate: () => 1,
  //       pow: () => 1,
  //       exclusiveEquipmentMultiplier: (inputValues: DamageFormData) => inputValues.exclusiveEquipment2 ? 0.3 : 0,
  //       enhance: [0.05, 0.05, 0, 0.05, 0, 0.15],
  //       isSingle: () => true,
  //     },
  //     s2: new Skill({
  //       rate: () => 0.9,
  //       pow: () => 1,
  //       isAOE: () => true,
  //     },
  //     s3: new Skill({
  //       rate: () => 2,
  //       pow: () => 0.95,
  //       mult: (soulburn: boolean, inputValues: DamageFormData, artifact: Artifact) => inputValues.targetHasBuff ? 1.5 : 1.0,
  //       multTip: () => ({targetHasBuff: 50}),
  //       enhance: [0.05, 0.05, 0, 0.05, 0.1, 0.1],
  //       isSingle: () => true,
  //     }
  //   }
  // },