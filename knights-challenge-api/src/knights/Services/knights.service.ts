import { Injectable } from '@nestjs/common';
import { KnightDto } from '../Dto/knights.dto';
import { KnightRepository } from '../../mongo/repository/knight.repository';
import { UpdateNicknameDto } from '../Dto/updateNickname.dto';
import { Knight } from 'src/mongo/interfaces/knight.interface';
import { WeaponDto } from '../Dto/weapon.dto';
import { AttributeDto } from '../Dto/attribute.dto';
import { AttributeKey } from '../Dto/attribute.enum';
import { KnightResponseDto } from '../Dto/knightResponse.dto';

@Injectable()
export class KnightsService {
    constructor(
        readonly knightRepository: KnightRepository
    ) { }

    public async getHeroes(): Promise<KnightDto[]> {
        const heroes = await this.knightRepository.getHeroes();
        return heroes.map(this.toKnightDto);
    }

    public async getKnightById(knightId: string): Promise<KnightDto> {
        const knight = await this.knightRepository.getKnightById(knightId);
        return this.toKnightDto(knight);
    }

    public async getKnights(): Promise<KnightDto[]> {
        const knights = await this.knightRepository.getKnights();
        return knights.map(this.toKnightDto);
    }

    public async saveKnight(knight: KnightDto): Promise<KnightDto> {
        const savedKnight = await this.knightRepository.saveKnight(knight);
        return this.toKnightDto(savedKnight);
    }

    public async updateKnight(knightId: string, body: UpdateNicknameDto): Promise<KnightDto> {

        const updatedKnight = await this.knightRepository.updateKnight(knightId, body);
        return this.toKnightDto(updatedKnight);
    }

    public async deleteKnight(knightId: string): Promise<KnightDto> {
        const deleteKnight = await this.knightRepository.deleteKnight(knightId);
        return this.toKnightDto(deleteKnight);
    }

    private toKnightDto(knight: Knight): KnightDto {
        return {
            _id: knight._id?.toString(),
            name: knight.name,
            nickname: knight.nickname,
            birthday: knight.birthday,
            weapons: knight.weapons as WeaponDto[],
            attributes: knight.attributes as AttributeDto,
            keyAttribute: knight.keyAttribute as AttributeKey,
            isHeroes: knight.isHeroes,
            classe: knight.classe!
        };
    }

    public toResponse(knightDto: KnightDto): KnightResponseDto {
        return {
            _id: knightDto._id,
            nome: knightDto.name,
            apelido: knightDto.nickname,
            idade: calculateAge(knightDto.birthday),
            armas: knightDto.weapons.length,
            atributo: knightDto.keyAttribute,
            ataque: mod(knightDto.attributes, knightDto.keyAttribute) + modWeapon(knightDto.weapons),
            exp: calcularExp(calculateAge(knightDto.birthday)),
            isHeroes: knightDto.isHeroes,
            classe: knightDto.classe!
        };
    }

    

    

    

}

function modWeapon(weapon: WeaponDto[]): number {
    return weapon.reduce((sum, weapon) => sum + weapon.mod, 0);
}


function mod(attributes: AttributeDto, keyAttribute: string): number {
    const rules = [
        { min: 0, max: 8, value: -2 },
        { min: 9, max: 10, value: -1 },
        { min: 11, max: 12, value: 0 },
        { min: 13, max: 15, value: 1 },
        { min: 16, max: 18, value: 2 },
        { min: 19, max: 20, value: 3 },
    ];

    const keyAttr = attributes[keyAttribute];

    if (keyAttr === undefined) {
        throw new Error("Invalid keyAttribute");
    }

    for (let rule of rules) {
        if (keyAttr >= rule.min && keyAttr <= rule.max) {
            return keyAttr + rule.value;
        }
    }

    throw new Error("keyAttr out of range");
}

function calcularExp(age) {
    if (age > 7) {
        return Math.floor((age - 7) * Math.pow(22, 1.45))
    } else {
        return 0;
    }
}

function calculateAge(birthday: Date): number {
     const today = new Date();
     let age = today.getFullYear() - birthday.getFullYear();
     const m = today.getMonth() - birthday.getMonth();
     if (m < 0 || (m === 0 && today.getDate() < birthday.getDate())) {
         age--;
     }
     return age;
 }