import { NextFunction, Request, Response } from 'express';
import { logger } from '../logger';
import { isInteger } from '../utils';
import { AppDataSource } from '../data-source';
import { Course } from '../models/course';

export async function updateCourse(
  request: Request, response: Response, next: NextFunction
) {

  try {
    logger.debug('Called updateCourse()');

    const courseId = request.params.courseId,
      changes = request.body;

    if (!isInteger(courseId)) {
      throw `Invalid courseId ${ courseId }`;
    }

    await AppDataSource
      .createQueryBuilder()
      .update(Course)
      .set(changes)
      .where('id = :courseId', { courseId })
      .execute();

    response.status(200).json({
      message: `Course ${ courseId } was updated successfully.`
    });

  } catch (error) {
    logger.error('Error calling updateCourse()');
    return next(error);
  }

}
