import { requestData } from "./global_helper";

export const battleCalculate = async ({ myPokemon, enemyPokemon, setBattleStatistic, fights }) => {
  let _myData = await Promise.all(
    myPokemon.moves.map(async (item) => {
      let record = await requestData(item.move.url);
      return record;
    })
  );
  let _enemyData = await Promise.all(
    enemyPokemon.moves.map(async (item) => {
      let record = await requestData(item.move.url);
      return record;
    })
  );
  let allMyMove = _myData.filter((fil) => fil.power !== null);
  let allEnemyMove = _enemyData.filter((fil) => fil.power !== null);

  let myStat = myPokemon.stats;
  let enemyStat = enemyPokemon.stats;

  let turn = 1;

  let enemyAttack = enemyStat
    .filter((fil) => fil.stat.name === "special-attack")
    .map((item) => {
      return item.base_stat;
    })[0];

  let enemyDeff = enemyStat
    .filter((fil) => fil.stat.name === "special-defense")
    .map((item) => {
      return item.base_stat;
    })[0];

  let enemySpeed = enemyStat
    .filter((fil) => fil.stat.name === "speed")
    .map((item) => {
      return item.base_stat;
    })[0];

  let myAttack = myStat
    .filter((fil) => fil.stat.name === "special-attack")
    .map((item) => {
      return item.base_stat;
    })[0];

  let myDeff = myStat
    .filter((fil) => fil.stat.name === "special-defense")
    .map((item) => {
      return item.base_stat;
    })[0];

  let mySpeed = myStat
    .filter((fil) => fil.stat.name === "speed")
    .map((item) => {
      return item.base_stat;
    })[0];

  let battleResult = [];

  while (turn <= fights) {
    let myHp = myStat
      .filter((fil) => fil.stat.name === "hp")
      .map((item) => {
        return item.base_stat;
      })[0];

    let enemyHp = enemyStat
      .filter((fil) => fil.stat.name === "hp")
      .map((item) => {
        return item.base_stat;
      })[0];

    let myRandomNum = Math.floor(Math.random() * 38 + 217);
    let enemyRandomNum = Math.floor(Math.random() * 38 + 217);

    let winner = {};

    while (!winner?.id) {
      let myRandomMove = Math.floor(Math.random() * allMyMove.length - 1 + 1);
      let enemyRandomMove = Math.floor(Math.random() * allEnemyMove.length - 1 + 1);
      let stab = Math.round(Math.random() * 1.5 + 1) - 0.5;

      let myDamage1 = Math.floor(2 / 5) + 2;
      myDamage1 = myDamage1 * myAttack * allMyMove[myRandomMove].power;
      myDamage1 = Math.floor(myDamage1 / enemyDeff);
      myDamage1 = Math.floor(myDamage1 / 50) + 2;

      // myDamage1 = Math.floor(myDamage1 * typemodif); --> set type modifier
      myDamage1 = Math.floor(myDamage1 * (stab === 0.5 ? 1 : stab));

      let myDamage2 = myDamage1 * myRandomNum;
      myDamage2 = Math.floor(myDamage2 / 255);

      let myDamage = Math.round((myDamage1 + myDamage2) / 2);

      let enemyDamage1 = Math.floor(2 / 5) + 2;
      enemyDamage1 = enemyDamage1 * enemyAttack * allEnemyMove[enemyRandomMove].power;
      enemyDamage1 = Math.floor(enemyDamage1 / myDeff);
      enemyDamage1 = Math.floor(enemyDamage1 / 50) + 2;
      enemyDamage1 = Math.floor(enemyDamage1 * (stab === 0.5 ? 1 : stab));

      let enemyDamage2 = enemyDamage1 * enemyRandomNum;
      enemyDamage2 = Math.floor(enemyDamage2 / 255);

      let enemyDamage = Math.round((enemyDamage1 + enemyDamage2) / 2);

      if (mySpeed >= enemySpeed) {
        enemyHp = enemyHp - myDamage;

        if (enemyHp > 0) {
          myHp = myHp - enemyDamage;

          if (myHp <= 0) {
            winner = enemyPokemon;
          }
        } else if (enemyHp <= 0) {
          winner = myPokemon;
        }
      } else if (mySpeed < enemySpeed) {
        myHp = myHp - enemyDamage;

        if (myHp > 0) {
          enemyHp = enemyHp - myDamage;

          if (enemyHp <= 0) {
            winner = myPokemon;
          }
        } else if (myHp <= 0) {
          winner = enemyPokemon;
        }
      }
    }

    battleResult.push(winner);
    turn++;
  }
  setBattleStatistic(battleResult);
};
